const db = require('../config/connection');
const { User, Post } = require('../models');

const usersData = require('./usersData.json');
const postsData = require('./postData.json');

db.once('open', async () => {
  // clean database
  await User.deleteMany({});
  await Post.deleteMany({});

  // bulk create each model
  await User.insertMany(usersData);
  const allPosts = await Post.insertMany(postsData);

  // attach posts to users within the database by username
  for (newPost of allPosts) {
    const [user] = await User.find({ userName: newPost.userName });
    console.log(user);
    user.posts.push(newPost._id);
    newPost.user = user._id;
    newPost.save();
    user.save();
  };

  console.log('all done!');
  process.exit(0);
});
