const express = require('express');
const app = express();
const port = 3000
const mongoose=require('mongoose');
const userRouter = require('./routes/userroutes');
var cors = require("cors");
app.use(cors())
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(userRouter);
async function connectDb() {
   await mongoose.connect("mongodb+srv://pavan:varma@cluster0.8irbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
}
connectDb().catch((err)=>console.error(err))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})