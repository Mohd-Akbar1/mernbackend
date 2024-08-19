require('dotenv').config();

const express=require('express')
const app=express()
const fs=require('fs')
const mongoose=require('mongoose')
const Data = require('./Database/model')
const cors=require('cors')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
app.use(cors())

app.get('/apidata', async (req, res) => {
    try {
      const data = await Data.find();
     
      return res.json(data);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
        
    

app.listen(8000,function(err){
    if(err) return resizeBy.send('Error occured')
    console.log('Server is running on Port 8000')
})

// async function InsertInDb(){
//     const data= fs.readFileSync('filedata','utf-8')
//     const jsondata= JSON.parse(data)
//     await Data.insertMany(jsondata)
//     return 'done'
// }
// InsertInDb()

