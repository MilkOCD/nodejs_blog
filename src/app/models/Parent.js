const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseDelete = require("mongoose-delete");

const Parent = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

Parent.plugin(mongooseDelete, { overrideMethods: "all", deletedAt: true });
module.exports = mongoose.model("Parent", Parent);
