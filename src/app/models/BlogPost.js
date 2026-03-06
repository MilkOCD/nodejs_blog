const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogPost = new Schema({
  name: { type: String, default: "Default name", maxLength: 255 },
  description: { type: String, default: "Default description", maxLength: 600 },
  image: { type: String, maxLength: 255 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("BlogPost", BlogPost);
