require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const server = express();
const PORT = process.env.PORT || 4000;


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
	.then(() => console.log("Connected to Mongodb!"))
	.catch(err => console.log("Mongoose Mongodb Connection Error - ", err));


server.use(express.json());
server.use(express.urlencoded({ extended: true }));




const teacherRoutes = require('./routes/teacher');
const recordRoutes = require('./routes/StudentRecord');

server.use('/teacher', teacherRoutes);
server.use('/record', recordRoutes);



server.listen(PORT, () => console.log(`server listing at http://localhost:${PORT}`));


// student
// records(Name,Register Number,Subject1,Subject2,Subject3,Total).

// Write API for Teacher actions like add, edit, delete student
// records(Name,Register Number,Subject1,Subject2,Subject3,Total).

// server.get("/", (req,res)=> {
//     res.send("gud morning  teacher");
// });