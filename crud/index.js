const express = require('express');
const mongoClient = require('mongoose');
const dotEnv = require('dotenv')
const bodyParser = require('body-parser')
const employeeRoute = require("./routes/EmployeeRoute")
const app = express();
dotEnv.config();
//middleware
app.use(bodyParser.json());

const PORT = process.env.PORT || 1234
mongoClient.connect(process.env.MONGO_URL).then(()=>{
    console.log("MongoDB atlas connection established successfully")
}).catch((err)=>{
    console.log(err);
})

app.use("/employee",employeeRoute);

app.listen(PORT,()=>{
    console.log(`My server is running on port ${PORT} number`);
    
})