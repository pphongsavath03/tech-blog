const { Post } = require('../models');

const postData = [{
  title: "Does this work?",
  content: "Hey This works!!",
  user_id: 1

},
{
  title: "Practice",
  content: "This this work now?",
  user_id: 2
},
{
  title: "Keep Pushing",
  content: "Dont skip school",
  user_id: 3
},
{
  title: "Work life balance",
  content: "take time for yourself",
  user_id: 4
}
];


const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;