//Ports
// 200,201,202...............It means success
// 401, 402.......not found(client related error)
// 300,301------Redirection error
// 500, 501............Server error


const express=require('express')
const app = express();
const users = require('./users.json')
const PORT = 8899;

app.get("/user",(request,response)=>{
    return response.json(users)
})

app.get("/user/:id",(request,response)=>{
    const id = Number(request.params.id);
    const user = users.find((user) => user.id === id)
    return response.json(user)
})

app.listen(PORT)


// app.get("/",(request,response)=>{
//     response.send("Welcome to express js get method")
// })
// app.get("/getName",(request,response)=>{
//     response.send("My College name is Vasantdada")
// })
// app.get("/getName/area",(request,response)=>{
//     response.send("Vasantdada from Mumbai");
// })

// app.listen(5566,()=>{
//     console.log("My Server is running on port number 5566")
// })