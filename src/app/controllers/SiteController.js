const asyncHandler = require("../../utils/asyncHandler");
const BlogPost = require("../models/BlogPost");

class SiteController {
  // [GET] /
  index = asyncHandler(async (req, res) => {
    const blogPosts = await BlogPost.find({}).lean();

    // res.json(blogPosts);
    res.render("home", { blogPosts });
  });

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
