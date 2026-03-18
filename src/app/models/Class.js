const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseDelete = require("mongoose-delete");

const Class = new Schema(
  {
    name: { type: String, required: true },
    subject: { type: String, required: true },
    day_of_week: { type: Number, required: true, min: 2, max: 8 }, // 2: Monday, 8: Sunday
    time_slot: { type: String, required: true }, // VD: "08:00-10:00"
    teacher_name: { type: String, required: true },
    max_students: { type: Number, default: 10 },
  },
  { timestamps: true }
);

Class.plugin(mongooseDelete, { overrideMethods: "all", deletedAt: true });
module.exports = mongoose.model("Class", Class);
