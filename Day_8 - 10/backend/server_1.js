const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');

dotenv.config();

const server=express();
server.use(express.json());


server.use("/",require('./routes/productroute'))
server.use("/api/user",require('./routes/userroute'));
server.use("/api/admin",require('./routes/adminroute'));

mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log("DB connected"))
    .catch((err)=> console.log("DB connection error:",err));

server.listen(4000, ()=> console.log("Server is running on port 4000"));