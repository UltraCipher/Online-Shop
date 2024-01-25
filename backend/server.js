const app=require('./app')
const mongoose=require('mongoose')
require('dotenv').config()

const port=process.env.PORT || 5000

const connectToDatabase=async()=>{
    await mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log('dataBase is connected'))
    .catch(err=>console.log(err))
}

connectToDatabase()

app.listen(port,()=>{
    console.log(`server is connected to ${port}`)
})

