const { Comment, Post } = require('./sequelize');
const { slugfy } = require('./helper');
// query questions

// Post.findAll({
//   where: {
//     post_type: 'question'
//   },
//   limit: 100
// }).then(posts => {
//   posts.forEach(post => console.log(post.dataValues.post_title));
// });

// query responses

// Comment.findAll({
//     where:{
//         postTy
//     },
//   offset: 10,
//   limit: 2
// }).then(result => {
//   console.log(result);
// });

//Create Question
const title = 'Teste SQL';
const content = 'teste';
const name = slugfy(title);
const guid = 'https://sebraerespostas.com.br/pergunta/' + name;

const postTest = {
  post_author: 2,
  post_date: new Date(),
  post_date_gmt: new Date(),
  post_content: content,
  post_title: title,
  post_name: name,
  guid: guid,
  post_type: 'question'
};
// console.log(post);

// Post.create(postTest)
//   .then(post => {
//     console.log(post);
//     // you can now access the newly created task via the variable task
//   })
//   .catch(error => {
//     console.log(error); // Ooops, do some error-handling
//   });

Post.findOne({ where: { post_title: 'Teste SQL' } }).then(post => {
  console.log(post);
  // project will be the first entry of the Projects table with the title 'aProject' || null
});
