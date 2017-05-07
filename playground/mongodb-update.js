// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('590f934fbf8286972401a779')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("590f88afdb4b9643e8a1a688")
  }, {
    $set: {
      name: "Ben"
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  });

  // db.close();
});
