const Sequelize = require('sequelize');
const CommentModel = require('./models/wp_comments');
const PostModel = require('./models/wp_posts');
const { DATABASE_NAME, ROOT, PASSWORD, HOST, DIALECT } = require('./constants');
const sequelize = new Sequelize(DATABASE_NAME, ROOT, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    timestamps: false
  }
});
const Comment = CommentModel(sequelize, Sequelize);
const Post = PostModel(sequelize, Sequelize);

module.exports = {
  Comment,
  Post
};
