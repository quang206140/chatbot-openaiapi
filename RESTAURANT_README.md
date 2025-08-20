# 🍜 Website Nhà Hàng Việt Nam với Chatbot AI

Website nhà hàng hiện đại với chatbot AI tích hợp để tư vấn và đặt bàn tự động.

## 🚀 Tính Năng

### Website Restaurant
- **Giao diện hiện đại**: Thiết kế responsive với animation mượt mà
- **Thực đơn nổi bật**: Hiển thị các món ăn Việt Nam truyền thống
- **Thông tin nhà hàng**: Địa chỉ, giờ mở cửa, liên hệ
- **Navigation mượt mà**: Smooth scrolling giữa các section

### Chatbot AI Tích Hợp
- **Nút chatbot**: Nút tròn màu đỏ ở góc phải dưới màn hình
- **Tư vấn tự động**: Trả lời về thực đơn, giá cả, đặt bàn
- **Quick replies**: Các nút tắt để khách hàng dễ dàng tương tác
- **Thu thập thông tin**: Tự động thu thập thông tin khách hàng để đặt bàn

## 📁 Cấu Trúc Files

```
restaurant-website/
├── restaurant.html          # Trang chính website restaurant
├── restaurant.css           # CSS cho website restaurant
├── restaurant.js            # JavaScript cho website restaurant
├── restaurant-chatbot.css   # CSS override cho chatbot trong restaurant
├── chatbot.js               # Logic chatbot (đã được cập nhật)
├── chatbot.css              # CSS gốc cho chatbot
└── api/                     # Backend API endpoints
    ├── chat.js
    ├── analyze_conversation.js
    ├── conversations.js
    └── conversations_messages.js
```

## 🎯 Cách Sử Dụng

### 1. Mở Website
```bash
# Mở file restaurant.html trong trình duyệt
open restaurant.html
```

### 2. Tương Tác với Chatbot
- **Click nút chatbot** (góc phải dưới) để mở chatbot
- **Sử dụng quick replies** để nhanh chóng hỏi thông tin
- **Chat tự nhiên** với AI về thực đơn, đặt bàn, giá cả

### 3. Đặt Bàn
- Click nút "Đặt Bàn Ngay" trên hero section
- Hoặc chat trực tiếp với chatbot: "Tôi muốn đặt bàn"
- Chatbot sẽ hướng dẫn thu thập thông tin cần thiết

## 🎨 Thiết Kế

### Màu Sắc Chủ Đạo
- **Đỏ nhà hàng**: `#e74c3c` - Màu chủ đạo cho buttons và highlights
- **Xanh dương**: `#3498db` - Màu phụ cho chatbot bot messages
- **Xám nhạt**: `#f8f9fa` - Background cho chat area

### Responsive Design
- **Desktop**: Chatbot 350x500px ở góc phải
- **Tablet**: Chatbot 90vw x 70vh
- **Mobile**: Chatbot 95vw x 60vh

## 🤖 Chatbot Features

### System Message
Chatbot được cấu hình với system message chuyên về nhà hàng:
- Tư vấn món ăn Việt Nam
- Hỗ trợ đặt bàn
- Cung cấp thông tin nhà hàng
- Thu thập thông tin khách hàng

### Quick Replies
- "Tôi muốn đặt bàn"
- "Xem thực đơn"
- "Giờ mở cửa"
- "Địa chỉ nhà hàng"
- "Giá cả thế nào?"

## 🔧 Tùy Chỉnh

### Thay Đổi Thông Tin Nhà Hàng
1. Cập nhật trong `restaurant.html`:
   - Địa chỉ, điện thoại, giờ mở cửa
   - Thực đơn và giá cả
   - Hình ảnh món ăn

2. Cập nhật trong `chatbot.js`:
   - System message với thông tin mới
   - Quick replies phù hợp

### Thay Đổi Màu Sắc
1. Cập nhật trong `restaurant.css`:
   - Màu chủ đạo: `#e74c3c`
   - Màu phụ: `#3498db`

2. Cập nhật trong `restaurant-chatbot.css`:
   - Màu chatbot header và buttons

## 📱 Responsive

Website được thiết kế responsive hoàn toàn:
- **Desktop**: Layout đầy đủ với chatbot ở góc
- **Tablet**: Menu items 2 cột, chatbot lớn hơn
- **Mobile**: Menu items 1 cột, chatbot full-width

## 🚀 Deployment

### Local Development
```bash
# Sử dụng live server hoặc Python
python -m http.server 8000
# Hoặc
npx live-server
```

### Production
- Upload lên hosting service (Vercel, Netlify, etc.)
- Cấu hình environment variables cho API
- Đảm bảo CORS được cấu hình đúng

## 🔗 API Endpoints

Website sử dụng các API endpoints từ chatbot gốc:
- `POST /api/chat` - Gửi tin nhắn và nhận phản hồi
- `POST /api/analyze_conversation` - Phân tích cuộc hội thoại
- `GET /api/conversations` - Lấy danh sách cuộc hội thoại

## 📞 Hỗ Trợ

Nếu cần hỗ trợ hoặc tùy chỉnh thêm:
1. Kiểm tra console browser để debug
2. Đảm bảo API endpoints hoạt động
3. Kiểm tra environment variables

---

**Lưu ý**: Đảm bảo backend API (các file trong thư mục `api/`) đã được cấu hình và deploy đúng cách để chatbot hoạt động.
