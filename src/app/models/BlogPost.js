const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const crypto = require("crypto");
const mongooseDelete = require("mongoose-delete");

var slugify = require("slugify");

const BlogPost = new Schema(
  {
    name: { type: String, default: "Default name" },
    description: { type: String, default: "Default description" },
    image: { type: String },
    slug: { type: String, unique: true },
  },
  {
    timestamps: true,
  }
);

// Middleware xử lý slug trước khi lưu
BlogPost.pre("save", async function () {
  if (this.isModified("name")) {
    const baseSlug = slugify(this.name, {
      lower: true,
      strict: true,
      locale: "vi",
    });

    // Tạo một đoạn mã ngẫu nhiên 6 ký tự
    const randomSuffix = crypto.randomBytes(3).toString("hex");

    // Slug sẽ có dạng: ten-bai-viet-a1b2c3
    this.slug = `${baseSlug}-${randomSuffix}`;
  }
});

BlogPost.plugin(mongooseDelete, { overrideMethods: "all", deletedAt: true });

module.exports = mongoose.model("BlogPost", BlogPost);
