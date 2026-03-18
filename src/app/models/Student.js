const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseDelete = require("mongoose-delete");

const Student = new Schema(
  {
    name: { type: String, required: true },
    dob: { type: Date },
    gender: { type: String, enum: ["Male", "Female", "Other"] },
    current_grade: { type: Number },
    parent_id: { type: Schema.Types.ObjectId, ref: "Parent", required: true },
  },
  { timestamps: true }
);

Student.plugin(mongooseDelete, { overrideMethods: "all", deletedAt: true });
module.exports = mongoose.model("Student", Student);
