const express = require("express");
const router = express.Router();
const SubscriptionController = require("../app/controllers/SubscriptionController");

router.post("/", SubscriptionController.create); // POST /api/subscriptions
router.patch("/:id/use", SubscriptionController.useSession); // PATCH /api/subscriptions/{id}/use
router.get("/:id", SubscriptionController.show); // GET /api/subscriptions/{id}

module.exports = router;
