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

  // [GET] /blog-detail/me
  me = asyncHandler(async (req, res) => {
    const blogPosts = await BlogPost.find({}).lean();

    res.render("blogs/me", { blogPosts: blogPosts });
  });

  // [GET] /blog-detail/{id}/edit
  edit = asyncHandler(async (req, res) => {
    const blogPost = await BlogPost.findById(req.params.id).lean();

    // res.json(blogPost);
    res.render("blogs/edit", { blogPost: blogPost });
  });

  // [PUT] /blog-detail/{id}/edit
  put = asyncHandler(async (req, res) => {
    await BlogPost.updateOne({ _id: req.params.id }, req.body);

    // res.json(blogPost);
    res.redirect("/blog-detail/me");
  });
}

module.exports = new BlogController();
