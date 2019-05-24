const mongoose = require('mongoose')
const validator = require('validator')

//connect to db
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser:true,
    useCreateIndex:true
})

 //model for mongoose

// const User = mongoose.model('User' , {
//     name: {
//         type:String,
//         required:true,
//         trim:true

//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase:true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is invalid')
//             }
//         }


//     },

//     password: {
//         type:String,
//         required: true,
//         trim: true,
//         minlength:7,
//         validate(value){
//             if(value.toLowerCase().includes("password")){
//                 throw new Error("You need a stronger pass")
//             }
//         }

//     },

//     age:{
//         type: Number,
//         default:0,
//         validate(value) {
//             if(value < 0){
//                 throw new Error('Age must be a pos nr')
//             }
//         }

//     }
// })

// const me = new User({
//    name:'  Vio  ',
//    email: 'mike@GMAIL.com ',
//    password: "Password567"
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log(error)
// })



// const tasks = new Task({
    
    
// })

// tasks.save().then(()=>{
//     console.log(tasks)
// }).catch((error) => {
//     console.log(error)
// })