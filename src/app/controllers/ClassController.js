const mongoose = require("mongoose");
const Class = require("../models/Class");
const Registration = require("../models/ClassRegistration");
const Subscription = require("../models/Subscription");

class ClassController {
  async create(req, res) {
    const newClass = new Class(req.body);
    await newClass.save();
    res.status(201).json(newClass);
  }

  async listByDay(req, res) {
    const classes = await Class.find({ day_of_week: req.query.day });
    // res.json(classes);
    res.render("edtech/class");
  }

  // [POST] /api/classes/:class_id/register
  async register(req, res) {
    const { student_id } = req.body;
    const { class_id } = req.params;

    try {
      // Chuyển student_id sang ObjectId để so khớp chính xác với DB
      const studentObjectId = new mongoose.Types.ObjectId(student_id);

      const targetClass = await Class.findById(class_id);

      // ĐƠN GIẢN HÓA QUERY: Chỉ tìm theo student_id trước để xem có ra gói học không
      const sub = await Subscription.findOne({ student_id: studentObjectId });

      console.log("--- DEBUG REGISTER ---");
      console.log("Class ID:", class_id);
      console.log("Student ID String:", student_id);
      console.log("Subscription found:", sub);

      // 1. Check Gói học
      if (!sub) {
        return res.status(400).json({
          error:
            "No subscription found for this student. Please create one first!",
        });
      }

      if (sub.used_sessions >= sub.total_sessions) {
        return res.status(400).json({ error: "Out of sessions" });
      }

      // 2. Check Sĩ số & 3. Check Trùng lịch (Giữ nguyên như cũ)
      // ... (phần code cũ của bạn) ...

      const registration = new Registration({
        class_id,
        student_id: studentObjectId,
      });
      await registration.save();

      // Cập nhật số buổi đã dùng
      await Subscription.findByIdAndUpdate(sub._id, {
        $inc: { used_sessions: 1 },
      });

      res.status(201).json(registration);
    } catch (err) {
      console.error("LỖI RỒI:", err.message);
      res.status(500).json({ error: err.message });
    }
  }

  // [DELETE] /api/registrations/:id
  async cancelRegistration(req, res) {
    try {
      const reg = await Registration.findById(req.params.id).populate(
        "class_id"
      );
      if (!reg) return res.status(404).json({ error: "Not found" });

      // Giả sử class có field 'start_time' hoặc dùng logic 24h tính từ lúc hủy đến giờ học
      // Ở đây demo logic đơn giản: so sánh thời điểm hiện tại
      const canRefund = true; // Thêm logic so sánh Date ở đây nếu cần

      if (canRefund) {
        await Subscription.updateOne(
          { student_id: reg.student_id },
          { $inc: { used_sessions: -1 } }
        );
      }
      await Registration.deleteOne({ _id: req.params.id });
      res.json({ message: "Cancelled successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
module.exports = new ClassController();
