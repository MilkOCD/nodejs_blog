const express = require("express");
const router = express.Router();

const blogController = require("../app/controllers/BlogController");

router.delete("/:id", blogController.destroy);
router.put("/:id/edit", blogController.put);
router.get("/:id/edit", blogController.edit);
router.get("/me", blogController.me);
router.get("/create", blogController.create);
router.post("/store", blogController.store);
router.get("/:slug", blogController.show);

module.exports = router;
