const express = require("express");
const router = express.Router();
const ParentController = require("../app/controllers/ParentController");

router.get("/", ParentController.index); // POST /api/parents
router.post("/", ParentController.create); // POST /api/parents
router.get("/:id", ParentController.show); // GET /api/parents/{id}

module.exports = router;
