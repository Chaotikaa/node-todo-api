const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var user1 = new User({
//   email: "chtka.ow@gmail.com"
// });

// user1.save().then((res) => {
//   console.log('Successful creation');
// });
 
// var id = '5913bdca57deb536e4f1efe911';

// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo', todo);
// }).catch((e) => console.log(e));
var id = '59140c3f26a99b0c7ce99e11';
User.findById(id).then((user) => {
  if(!user) {
    return console.log('User not found');
  }
  console.log('User by id', user);
}).catch((e) => console.log(e));