const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');



module.exports = {
    getThoughts(req, res) {
    Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
    getSinglePost(req, res) {
      Thought.findOne({ _id: req.params.postId })
        .then((post) =>
          !post
            ? res.status(404).json({ message: 'No post with that ID' })
            : res.json(post)
        )
        .catch((err) => res.status(500).json(err));
    },

    // create new thought
createThought(req, res) {
    Thought.create(req.body)
      .then((post) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: post._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'Post created, but found no user with that ID' })
          : res.json('Created the post 🎉')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};
