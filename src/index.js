const path = require("path");
const express = require("express");
const methodOverride = require("method-override");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

// Khi để đường dẫn đến thư mục, tự nạp file index
const route = require("./routes");
const db = require("./config/db");

// Connection to DB
db.connect();

app.use(express.static(path.join(__dirname, "public")));

// Middleware xử lý dữ liệu submit từ form lên server
app.use(express.urlencoded({ extended: true }));
// XMLHttpRequest, fetch, axios, ...
app.use(express.json());

app.use(methodOverride("_method"));

// HTTP logger
app.use(morgan("combined"));

// Express handlebars
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);

app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "resources", "views")); // Viết thành các dạng đối số cho phù hợp nhiều OS (operating system)

// Routes init - Khởi tạo tuyến đường
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
