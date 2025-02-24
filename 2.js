//promiss

const raunak= new Promise((resolve, reject)=>{
   // console.log("buddy");
    //resolve(123);
    var a=false;
    if (a) {
        resolve(1234)
        
    }else{
        reject("network failure")
    }
    
})

console.log(raunak);
