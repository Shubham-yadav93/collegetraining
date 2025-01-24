const mg = require ('mongoose')
const emps = new mg.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
})

module.exports = mg.model("Employee",emps)