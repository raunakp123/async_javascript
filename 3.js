 const result=new Promise((resolve,reject)=>{

setTimeout(()=>{
    console.log("mwern");
    resolve("data receved")
    
    
},5000)


})
console.log(result);
