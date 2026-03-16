const asyncHandler = require("../../utils/asyncHandler");
const BlogPost = require("../models/BlogPost");

class BlogController {
  // [GET] /blog-detail/:slug
  show = asyncHandler(async (req, res, next) => {
    const blogPost = await BlogPost.findOne({ slug: req.params.slug }).lean();

    // res.json(blogPost);
    res.render("blogs/show", { blogPost });
  });

  // [GET] /blog-detail/create
  create = asyncHandler(async (req, res) => {
    res.render("blogs/create");
  });

  // [POST] /blog-detail/store
  store = asyncHandler(async (req, res) => {
    const formData = req.body;

    const blogPost = new BlogPost(formData);

    await blogPost.save();

    res.redirect("/");
  });
}

module.exports = new BlogController();
