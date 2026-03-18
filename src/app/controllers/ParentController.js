const asyncHandler = require("../../utils/asyncHandler");
const Parent = require("../models/Parent");

class ParentController {
  index = asyncHandler((req, res) => {
    res.render("edtech/createParent");
  });
  // [POST] /api/parents
  async create(req, res) {
    try {
      const parent = new Parent(req.body);
      await parent.save();
      res.status(201).json(parent);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  // [GET] /api/parents/:id
  async show(req, res) {
    try {
      const parent = await Parent.findById(req.params.id);
      res.json(parent);
    } catch (err) {
      res.status(404).json({ error: "Not found" });
    }
  }
}
module.exports = new ParentController();
