const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsController");

// Tuyến đường luôn đọc từ trên xuống và lấy route khớp đầu tiên
router.use("/:slug", newsController.show);
router.use("/", newsController.index);

module.exports = router;
