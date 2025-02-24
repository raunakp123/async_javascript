//promiss chaining

const result= new Promise((resolve, reject)=>{

    console.log("buddy");
   // resolve({"name":"raunak","sub":"mern"})
    reject("network falure")
    

})
//console.log(result);
result.then((data)=>{
    console.log(data);
    
}).catch((err)=>{
    console.log(err);
    
})
