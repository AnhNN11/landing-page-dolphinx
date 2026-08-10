type ConsultationPayload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  service?: unknown;
  budget?: unknown;
  message?: unknown;
  source?: unknown;
  website?: unknown;
};

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function normalizePhone(value: string) {
  return value.replace(/[\s().-]/g, "");
}

export async function POST(request: Request) {
  let payload: ConsultationPayload;

  try {
    payload = (await request.json()) as ConsultationPayload;
  } catch {
    return Response.json({ message: "Dữ liệu biểu mẫu không hợp lệ." }, { status: 400 });
  }

  // Honeypot: bots commonly fill this field. Return success without writing spam.
  if (clean(payload.website, 200)) return Response.json({ ok: true });

  const name = clean(payload.name, 80);
  const phone = normalizePhone(clean(payload.phone, 20));
  const email = clean(payload.email, 120);
  const service = clean(payload.service, 100);
  const budget = clean(payload.budget, 80);
  const message = clean(payload.message, 2000);
  const source = clean(payload.source, 240) || "/";

  if (name.length < 2) return Response.json({ message: "Vui lòng nhập họ và tên." }, { status: 400 });
  if (!/^(?:\+?84|0)\d{9,10}$/.test(phone)) return Response.json({ message: "Số điện thoại chưa đúng định dạng." }, { status: 400 });
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return Response.json({ message: "Email chưa đúng định dạng." }, { status: 400 });
  if (!service) return Response.json({ message: "Vui lòng chọn dịch vụ cần tư vấn." }, { status: 400 });

  const webhookUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
  if (!webhookUrl) {
    return Response.json(
      { message: "Form đang chờ URL triển khai Apps Script. Vui lòng cấu hình GOOGLE_APPS_SCRIPT_URL." },
      { status: 503 },
    );
  }

  const body = new URLSearchParams({ name, phone, email, service, budget, message, source });

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body,
      redirect: "follow",
      cache: "no-store",
    });

    if (!response.ok) throw new Error(`Apps Script responded with ${response.status}`);
    const result = (await response.json()) as { ok?: boolean; message?: string };
    if (!result.ok) throw new Error(result.message || "Apps Script rejected the request");

    return Response.json({ ok: true });
  } catch {
    return Response.json({ message: "Chưa thể gửi thông tin. Vui lòng thử lại sau ít phút." }, { status: 502 });
  }
}
