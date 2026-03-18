// Action ---> Dispatcher ---> Function handler
// Dispatcher: Đọc xem action khớp thì thực thi
// Controller trong mô hình MVC: Là phần Function handler
// Truyền trực tiếp như bên dưới thì chưa phải là mô hình MVC

const siteRouter = require("./site.route");
const newsRouter = require("./news.route");
const blogRouter = require("./blog.route");

const parentRouter = require("./parents.route");
const studentRouter = require("./students.route");
const classRouter = require("./classes.route");
const subscriptionRouter = require("./subscriptions.route");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/blog-detail", blogRouter);
  app.use("/", siteRouter);

  app.use("/parent", parentRouter);
  app.use("/student", studentRouter);
  app.use("/api/parents", parentRouter);
  app.use("/api/students", studentRouter);
  app.use("/class", classRouter);
  app.use("/api/classes", classRouter);
  app.use("/api/subscriptions", subscriptionRouter);
}

module.exports = route;
