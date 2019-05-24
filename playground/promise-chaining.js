require('../src/db/mongoose')
const User = require('../src/models/user')

//5ce4fc84817032285cd547fb

User.findByIdAndUpdate('5ce4fed1a204d7046c0c8c3d', {age:18}).then((user) => {
    console.log(user)
    return User.countDocuments({age:18})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

const updateAgeandCount = async (id,age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeandCount('5ce4fed1a204d7046c0c8c3d', 20).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})