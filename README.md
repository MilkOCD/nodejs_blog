- using node version 18.18.2
- using --save-dev for nodemon, no need to install it on product env (Nodemon, Morgan, Sass)
- "start": "nodemon index.js" - script

### KIẾN THỨC CỐT LÕI

# Nodemon

- Giám sát sự thay đổi trong sourcecode và reload

# Morgan (Thư viện middleware)

- morgan: Quan sát log của request từ client gửi lên node server

# Template engine (Sử dụng handleblars lib)

- handleblars: Viết ra những file chứa HTML ở nơi khác gọn gàng hơn, chia layout

# MÔ HÌNH MVC: Bóc tách dự án ra thành cách thành phần

- Model: Tương tác với datasource, resource từ database
- View: Chỉ chứa file view HTML, css
- Controller: Trung chuyển giữa view và model

* Dispatch là hành vi gọi sang 1 controller

* Các bước:

- Trong src, tạo routes folder, app/controller

* Quy ước tạo file:

- 80-90% khi tạo router, controller giống với các table name hoặc collection name trong DB

### KIẾN THỨC LIÊN QUAN

- Instance là đối tượng cụ thể, thể hiện cho 1 class
- Object thì là đối tượng tổng quát

- Tất cả các METHOD đều có thể sử dụng QUERY PARAMETERS

- Get

  - Mục đích: Lấy dữ liệu (Read)
  - Dữ liệu truyền: Nằm trên URL
  - Tính bảo mật: Thấp
  - Tác động lên server: Không thay đổi trạng thái (An toàn)
  - Sử dụng:
    Bạn muốn lấy dữ liệu: Hiển thị trang chủ, xem danh sách sản phẩm, tìm kiếm (search).
    Không làm thay đổi dữ liệu gốc: Bạn truy cập 100 lần vào link /users thì danh sách user cũng không được tự động thêm mới.
    Muốn chia sẻ link: Vì dữ liệu nằm trên URL, người dùng có thể copy link đó gửi cho bạn bè mà vẫn xem được đúng nội dung.

- Post
  - Mục đích: Gửi dữ liệu đi (Create/Action)
  - Dữ liệu truyền: Nằm trong "Body" (ẩn bên trong gói tin)
  - Tính bảo mật: Cao hơn (dữ liệu không hiện trên URL)
  - Tác động lên server: Thay đổi trạng thái (Tạo dữ liệu, xóa, update)
  - Sử dụng:
    Bạn gửi thông tin nhạy cảm: Đăng nhập, đăng ký, thanh toán (không ai muốn password hiện lên URL cả!).
    Bạn làm thay đổi dữ liệu: Tạo mới một user (/users), đặt hàng, đăng bài viết.
    Gửi lượng dữ liệu lớn: POST cho phép bạn gửi file, ảnh, hoặc đoạn text rất dài trong "Body" mà không bị giới hạn độ dài như URL.

### MongoDB

## Run: Terminal -> mongod

- echo $PATH
- Download MongoDB Compass & MongoDB Community Server
- sudo mkdir -p /usr/local/mongodb
- cp -R /Users/leminhchien/Downloads/mongodb-macos-aarch64--8.2.5/bin /usr/local/mongodb
- sudo chmod 777 /usr/local/mongodb
- cd ~/
- nano .bashrc
- export PATH="/usr/local/mongodb/bin:$PATH"
- Để update path vào môi trường: source ~/.bashrc

### Prettier, LintStaged

- "beautiful": "prettier --single-quote --trailing-comma all --write 'src/\*_/_.{js,json,scss}'",
- "lint-staged": {
  "\*": "your-cmd"
  },
- "husky": {
  "hooks": {
  "pre-commit": "npm test",
  "pre-push": "npm test",
  "": ""
  }
  },
