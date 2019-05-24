require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5ce4fdef5393ab31502cf67c').then((task) => {
    console.log(task)
   return Task.countDocuments({completed: false})
    
}).then((result) =>{
    console.log(result)
}).catch((e) => {
    console.log(e)
})

const deleteTaskFound = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count

}

deleteTaskFound('5ce503eb29996e2b74567e65').then((count)=>{
    console.log(count)
})