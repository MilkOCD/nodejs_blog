const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseDelete = require("mongoose-delete");

const ClassRegistration = new Schema(
  {
    class_id: { type: Schema.Types.ObjectId, ref: "Class", required: true },
    student_id: { type: Schema.Types.ObjectId, ref: "Student", required: true },
    registration_date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

ClassRegistration.plugin(mongooseDelete, {
  overrideMethods: "all",
  deletedAt: true,
});
module.exports = mongoose.model("ClassRegistration", ClassRegistration);
