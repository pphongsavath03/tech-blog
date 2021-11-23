const { Comment } = require('../models');

const commentData = [{
    comment_text: "This is a test. Keep coding",
    user_id: 1,
    post_id: 1
},
{
    comment_text: "This is also a test. ABC Always Be Coding",
    user_id: 2,
    post_id: 2
},
{
    comment_text: "This course will get easier",
    user_id: 3,
    post_id: 3
},
{
    comment_text: "This is the last test. Almost finish",
    user_id: 4,
    post_id: 4
}
];
const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;