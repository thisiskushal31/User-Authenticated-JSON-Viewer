const express = require("express")

const postController = require("../controllers/postController");
const protect = require("../middleware/authMiddleware");

const router = express.Router()

router
    .route("/")
    .get(protect, postController.getAllPosts)
    .post(protect, postController.createPost);
    // here protect make sure user login before creating the post
router
    .route("/:id")
    .get(protect, postController.getOnePost)
    .delete(protect, postController.deletePost)
    .patch(protect, postController.updatePost);

module.exports = router;
    