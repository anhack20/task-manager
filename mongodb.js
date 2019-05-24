//CRUD



const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const database = 'task-manager'
const id = new ObjectID()
console.log(id.id.length)
console.log(id.toHexString().length)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {useNewUrlParser:true}, (error, client)=>{
    if(error){
      return console.log('unable to  connect to db')

    }
    
  const db = client.db(database)

  const deletePromise = db.collection('task').deleteOne({
      description: 'Object 3'
  }).then((result) => {
      console.log(result)
  }).catch((error=> {
      console.log(error)
  }))

//   const updatePromise = db.collection('task').updateMany({
//     //   _id: new ObjectID('5ce3133fc2bbaa0b1c10d055')
//     completed:false
//     },{
//          $set:{
//           completed: true
//         }

//         // $inc: {
//         //     age: 6
//         // }

//     })

//     updatePromise.then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)

//     })
//   db.collection('task').findOne({_id: new ObjectID('5ce315e7ef180119b8cb7604')} , (error, user) => {
//         if(error){
//             return console.log('unable to fetch user')
//         }
//         console.log(user)
//   })

//   db.collection('task').find({completed: true}).toArray((error, user) => {
//     if(error){
//         return console.log('unable to fetch user')
//     }
//     console.log(user)
// })
//   db.collection('users').insertOne({
//       _id: id,
//       name: 'Cris',
//       age: 23
//   }, (error, result) => {
//     if(error){
//         return console.log('unable to insert user')
//     }
//     console.log(result.ops)
//   })

// db.collection('task').insertMany([
//    { 
//        description:'Object',
//         completed:true
//    }, {
//         description:'Object 3',
//         completed:false
//     },{
//         description:'Object 4',
//         completed:true
//     }
// ], (error, result) => {
//     if(error){
//              return console.log('unable to insert user')
//         }
//         console.log(result.ops)
// })
    
})

