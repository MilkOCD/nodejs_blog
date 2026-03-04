// Action ---> Dispatcher ---> Function handler
// Dispatcher: Đọc xem action khớp thì thực thi
// Controller trong mô hình MVC: Là phần Function handler
// Truyền trực tiếp như bên dưới thì chưa phải là mô hình MVC

const siteRouter = require("./site.route");
const newsRouter = require("./news.route");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
}

module.exports = route;
