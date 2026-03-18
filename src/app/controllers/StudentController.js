const asyncHandler = require("../../utils/asyncHandler");
const Student = require("../models/Student");

class StudentController {
  index = asyncHandler((req, res) => {
    res.render("edtech/createStudent");
  });
  // [POST] /api/students
  async create(req, res) {
    try {
      const student = new Student(req.body);
      await student.save();
      res.status(201).json(student);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  // [GET] /api/students/:id
  async show(req, res) {
    try {
      const student = await Student.findById(req.params.id).populate(
        "parent_id"
      );
      res.json(student);
    } catch (err) {
      res.status(404).json({ error: "Not found" });
    }
  }
}
module.exports = new StudentController();
