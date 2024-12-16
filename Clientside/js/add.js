document.getElementById("new-contact").addEventListener("submit",async(ev)=>{
    try {
        ev.preventDefault()
        name=document.getElementById("fname").value+" "+document.getElementById("lname").value
    phone=document.getElementById("phone").value
    console.log(name,"==",phone);

    const res=await fetch("http://localhost:3000/api/add",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({name,phone})
    })
    console.log(res);
    if(res.status==201){
        const {msg}=await res.json()
            alert(msg)
            window.location.href="../index.html"
    }
        
    } catch (error) {
        console.log(error);
        
    }
    
    
})