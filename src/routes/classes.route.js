const express = require("express");
const router = express.Router();
const ClassController = require("../app/controllers/ClassController");

router.post("/", ClassController.create); // POST /api/classes
router.get("/", ClassController.listByDay); // GET /api/classes?day={weekday}
router.post("/:class_id/register", ClassController.register); // POST /api/classes/{id}/register
router.delete("/registrations/:id", ClassController.cancelRegistration); // DELETE /api/registrations/{id}

module.exports = router;
