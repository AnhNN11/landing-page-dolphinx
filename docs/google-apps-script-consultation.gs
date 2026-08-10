const SPREADSHEET_ID = "1mUv1zgvrJpWjfDmduWP77V0o1WeczeyNIuKfqzaUdJY";
const SHEET_NAME = "Đăng ký tư vấn";

function doGet() {
  return jsonResponse({ ok: true, service: "DolphinX consultation webhook" });
}

function doPost(e) {
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(10000);
    const data = parseRequest(e);
    const name = clean(data.name, 80);
    const phone = clean(data.phone, 20);
    const email = clean(data.email, 120);
    const service = clean(data.service, 100);
    const budget = clean(data.budget, 80);
    const message = clean(data.message, 2000);
    const source = clean(data.source, 240) || "/";

    if (!name || !phone || !service) {
      return jsonResponse({ ok: false, message: "Thiếu thông tin bắt buộc." });
    }

    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    if (!sheet) throw new Error("Không tìm thấy sheet: " + SHEET_NAME);

    const row = sheet.getLastRow() + 1;
    sheet.getRange(row, 3, 1, 2).setNumberFormat("@");
    sheet.getRange(row, 1, 1, 9).setValues([[
      new Date(),
      name,
      phone,
      email,
      service,
      budget,
      message,
      source,
      "Mới",
    ]]);
    sheet.getRange(row, 1).setNumberFormat("dd/MM/yyyy HH:mm:ss");

    return jsonResponse({ ok: true });
  } catch (error) {
    console.error(error);
    return jsonResponse({ ok: false, message: "Không thể ghi dữ liệu vào Google Sheet." });
  } finally {
    lock.releaseLock();
  }
}

function parseRequest(e) {
  if (e && e.parameter && Object.keys(e.parameter).length) return e.parameter;
  if (!e || !e.postData || !e.postData.contents) return {};
  try {
    return JSON.parse(e.postData.contents);
  } catch (_error) {
    return {};
  }
}

function clean(value, maxLength) {
  return String(value || "").trim().slice(0, maxLength);
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
