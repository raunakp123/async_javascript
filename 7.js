const result1= new Promise(()=>{

})


const result= fetch("https://fakestoreapi.in/docs");


result.then((data)=>{
    console.log(data);
    return data.json();
    
}).then((jsondata)=>{
    console.log(jsondata);
    
})