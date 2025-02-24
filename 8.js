async function getdata() {
    try {
     data=await fetch("https://fakestoreapi.in/docs");
     console.log(data);
     jsondata=await data.json();
     console.log(jsondata);
     
     
    } catch (error) {
        
    }
    
}
getdata();