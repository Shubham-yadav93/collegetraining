const emp = require("../model/Employee")

//post or insert
const cemp = async(req,res)=>{
    try{
        const{name,email,phone} = req.body;
        const employee = new emp({
            name,email,phone
        })
        await employee.save();
        res.status(201).json({message:"Employee document inserted successfully"})
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"Server error"})
    }
}

module.exports={cemp}