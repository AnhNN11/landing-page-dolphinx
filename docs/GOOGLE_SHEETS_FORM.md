# Form tư vấn → Google Sheets

Google Sheet đích: `1mUv1zgvrJpWjfDmduWP77V0o1WeczeyNIuKfqzaUdJY`

## Triển khai Apps Script

1. Mở Google Sheet, chọn **Tiện ích → Apps Script**.
2. Thay nội dung `Code.gs` bằng file `docs/google-apps-script-consultation.gs`.
3. Chọn **Triển khai → Lần triển khai mới → Ứng dụng web**.
4. Chọn **Thực thi với tư cách: Tôi** và **Ai có quyền truy cập: Bất kỳ ai**.
5. Sao chép URL kết thúc bằng `/exec`.

## Chạy local

Tạo file `.dev.vars` ở thư mục gốc dự án:

```dotenv
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/DEPLOYMENT_ID/exec
```

Khởi động lại `npm run dev`. Form gửi tới `/api/consultation`; route server kiểm tra dữ liệu rồi chuyển tiếp đến Apps Script, vì vậy URL webhook không xuất hiện trong bundle trình duyệt.

## Cột dữ liệu

Apps Script ghi theo thứ tự: thời gian, họ tên, số điện thoại, email, dịch vụ, ngân sách, nội dung, nguồn trang và trạng thái. Trạng thái mặc định là `Mới`.
