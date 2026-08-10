"use client";

import { CheckCircle2, LoaderCircle, Send, ShieldCheck, Sparkles } from "lucide-react";
import { FormEvent, useState } from "react";
import { useLocale } from "./LocaleProvider";

type SubmitState = "idle" | "submitting" | "success" | "error";

const services = [
  ["Website / Landing Page", "Website / Landing Page"],
  ["Zalo Mini App", "Zalo Mini App"],
  ["Mobile App", "Mobile App"],
  ["Web App / Phần mềm", "Web App / Custom Software"],
  ["Đào tạo công nghệ", "Technology Education"],
  ["Tư vấn chuyển đổi số", "Digital Transformation Consulting"],
];

const budgets = [
  ["Cần tư vấn", "Need advice"],
  ["Dưới 20 triệu", "Under VND 20M"],
  ["20 – 50 triệu", "VND 20M – 50M"],
  ["50 – 100 triệu", "VND 50M – 100M"],
  ["Trên 100 triệu", "Over VND 100M"],
];

export function ConsultationForm() {
  const { locale, t } = useLocale();
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setState("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          service: data.get("service"),
          budget: data.get("budget"),
          message: data.get("message"),
          website: data.get("website"),
          source: `${window.location.pathname}${window.location.hash}`,
        }),
      });

      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || t("Không thể gửi yêu cầu.", "Could not send your request."));

      form.reset();
      setState("success");
      setMessage(t("DolphinX đã nhận thông tin. Đội ngũ sẽ liên hệ với bạn sớm nhất.", "DolphinX received your request. Our team will contact you shortly."));
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : t("Có lỗi xảy ra. Vui lòng thử lại.", "Something went wrong. Please try again."));
    }
  }

  return (
    <form className="consultation-form" onSubmit={handleSubmit} noValidate>
      <div className="consultation-form-head">
        <div>
          <span><Sparkles size={13} /> GOOGLE SHEETS · TỰ ĐỘNG</span>
          <h3>{t("Nhận tư vấn phù hợp", "Get tailored advice")}</h3>
          <p>{t("Để lại thông tin, DolphinX sẽ giúp bạn chọn đúng điểm bắt đầu.", "Share a few details and DolphinX will help you choose the right starting point.")}</p>
        </div>
        <i><ShieldCheck size={20} /></i>
      </div>

      <div className="consultation-form-grid">
        <label>
          <span>{t("Họ và tên", "Full name")} *</span>
          <input name="name" type="text" autoComplete="name" minLength={2} maxLength={80} required placeholder={t("Nguyễn Văn An", "Your name")} />
        </label>
        <label>
          <span>{t("Số điện thoại", "Phone number")} *</span>
          <input name="phone" type="tel" inputMode="tel" autoComplete="tel" maxLength={20} required placeholder="09xx xxx xxx" />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" maxLength={120} placeholder="hello@company.vn" />
        </label>
        <label>
          <span>{t("Dịch vụ quan tâm", "Service of interest")} *</span>
          <select name="service" defaultValue="" required>
            <option value="" disabled>{t("Chọn một dịch vụ", "Choose a service")}</option>
            {services.map(([vi, en]) => <option value={vi} key={vi}>{locale === "vi" ? vi : en}</option>)}
          </select>
        </label>
        <label className="consultation-wide">
          <span>{t("Ngân sách dự kiến", "Estimated budget")}</span>
          <select name="budget" defaultValue="Cần tư vấn">
            {budgets.map(([vi, en]) => <option value={vi} key={vi}>{locale === "vi" ? vi : en}</option>)}
          </select>
        </label>
        <label className="consultation-wide">
          <span>{t("Bạn đang muốn giải quyết điều gì?", "What would you like to solve?")}</span>
          <textarea name="message" rows={4} maxLength={2000} placeholder={t("Mô tả ngắn mục tiêu, quy trình hiện tại hoặc thời gian bạn muốn triển khai...", "Briefly describe your goal, current workflow or preferred timeline...")} />
        </label>
        <label className="consultation-honeypot" aria-hidden="true">
          <span>Website</span>
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button className="consultation-submit" type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? <LoaderCircle className="consultation-spinner" size={18} /> : <Send size={17} />}
        {state === "submitting" ? t("Đang gửi...", "Sending...") : t("Gửi yêu cầu tư vấn", "Send consultation request")}
      </button>

      <div className={`consultation-status ${state}`} role="status" aria-live="polite">
        {state === "success" && <CheckCircle2 size={17} />}
        <span>{message || t("Thông tin được gửi bảo mật đến bảng quản lý tư vấn của DolphinX.", "Your information is sent securely to DolphinX's consultation workspace.")}</span>
      </div>
    </form>
  );
}
