const emp = require("../model/Employee")
const Employee = require("../model/Employee");

//post or insert
const cemp = async(req,res)=>{  // cemp = createEmployee
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

// get
const getEmployees = async(request,response)=>{
    try{
        const employees = await Employee.find();
        response.status(201).json(employees);
    }
    catch(err){
        console.log(err);
        response.status(501).json({message:"Server issue error"})
    }
}


//


const getEmployee=async(request,response)=>{
    try{
        const employee=await Employee.findById(request.params.id);
        if(!employee){
            return response.status(401).json({message:"Employee document is not exist"})
        }
        response.status(201).json(employee);
    }
    catch(error){
        console.log(error)
        response.status(501).json({message:"Server related issue"})
    }
}


//


const updateEmployee=async(request,response)=>{
    try{
        const{name,email,phone}=request.body;
        const myEmployee=await Employee.findByIdAndUpdate(request.params.id,
        {name,email,phone}
        )
        if(!myEmployee)
        {
            return response.status(404).json({message:"Employee document is not updated"})
        }
        response.status(200).json(myEmployee);

    }
    catch(err){
        console.log(err);
        response.status(501).json({message:"Server related error"})
    }
}

//
//delete
const deleteEmployee = async (request, response) => {
    try {
        const employee = await Employee.findByIdAndDelete(request.params.id);
        if (!employee) {
            return response.status(404).json({ message: "Employee document does not exist or already deleted" });
        }
        response.status(200).json({ message: "Employee document deleted successfully" });
    } catch (error) {
        console.log(error);
        response.status(500).json({ message: "Server error during deletion" });
    }
};

module.exports={cemp,getEmployees,getEmployee,updateEmployee,deleteEmployee};