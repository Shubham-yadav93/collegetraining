// const arr = ["one","two","three","four","five"] 

// const newarr = [...arr, "six","seven"]

// console.log(newarr);


const sayHi=()=>{
  console.log("It is sayHi function")
}

const sayHello=()=>{
  console.log("begining of the sayHello")
   setTimeout(()=>{
         sayHi();
       },5000)
console.log("End of the say Hello function");
}

sayHello();  // fuction calling 