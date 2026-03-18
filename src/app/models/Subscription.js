const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseDelete = require("mongoose-delete");

const Subscription = new Schema(
  {
    student_id: { type: Schema.Types.ObjectId, ref: "Student", required: true },
    package_name: { type: String, required: true },
    start_date: { type: Date, default: Date.now },
    end_date: { type: Date, required: true },
    total_sessions: { type: Number, required: true },
    used_sessions: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Helper để check hiệu lực nhanh
Subscription.methods.isValid = function () {
  return this.used_sessions < this.total_sessions && this.end_date > new Date();
};

Subscription.plugin(mongooseDelete, {
  overrideMethods: "all",
  deletedAt: true,
});
module.exports = mongoose.model("Subscription", Subscription);
