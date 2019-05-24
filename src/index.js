const express = require('express')
const path = require('path')
const $ = require('jQuery');
const jsdom = require('jsdom')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter= require('./routers/task')
const hbs = require('hbs')


const app = express()
const port = process.env.PORT || 3000

const viewsPath=path.join(__dirname, '../templates/views')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
// app.use((req,res,next) => {
//     if(req.method === "GET")
//     {
//         res.send('GET requests are disabled')
//     }else
//     {
//         next()
//     }
// })

// app.use((req,res,next) => {
//     res.status(503).send('Site is down, check back soon')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


    // User.findById(_id).then((user)=>{
    //     if(!user){
    //         return res.status(404).send()
    //     }
    //     res.send(user)

    // }).catch((e)=>{
    //     res.status(500).send()
    // })

//  const jwt = require('jsonwebtoken')
//  const myFunc = async () => {
//     const token = jwt.sign({_id:"abc123" }, 'thisismynewcourse', {expiresIn: '7 days'})
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// } 
// myFunc()

const Task = require('./models/task')
const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('5ce669d557f5351238a83e5a')
//     // await task.populate('owner').execPopulate()
   
//     // console.log(task.owner)
//     const user = await User.findById('5ce66821621cc7176c3b23a6')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)

// }


app.get('/login',  (req, res) => {
    res.render('login', {
        title: 'login'
       
    })
})
//     console.log(res.query.email)
// })
// main()
app.listen(port, () => {
    console.log('Server is up on port ' + port)
}) 

