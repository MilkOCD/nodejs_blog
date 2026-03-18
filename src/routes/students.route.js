const express = require("express");
const router = express.Router();
const StudentController = require("../app/controllers/StudentController");

router.get("/", StudentController.index); // POST /api/parents
router.post("/", StudentController.create); // POST /api/students
router.get("/:id", StudentController.show); // GET /api/students/{id}

module.exports = router;
