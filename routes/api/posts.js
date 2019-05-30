const express = require('express');
const auth = require('../../middleware/auth');
const mongodb = require('mongodb');

const router = express.Router();

// @route   GET api/posts
// @desc    Test route
// @access  Public

// Get Posts
router.get('/', auth, async (req, res) => {
  console.log('Get started');
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
  console.log('Get end');
});

async function loadPostsCollection() {
  console.log('Start loadPostsCollection');
  const clinet = await mongodb.MongoClient.connect(
    'mongodb+srv://MoodTracker:fuMvtU8demSwTwN3@cluster0-i7z5t.mongodb.net/test?retryWrites=true',

    {
      useNewUrlParser: true
    }
  );
  console.log('End loadPostsCollection');
  return clinet.db('vue-express').collection('posts');
}

module.exports = router;
