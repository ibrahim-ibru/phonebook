async function getContacts() {
    try {
        const res= await fetch("http://localhost:3000/api/getdata",{
            method:"GET",
            headers:{"Content--type":"applicatiion/json"}
        })
    console.log(res);
    if(res.status==200){
        const data=await res.json()
        str=``
        data.map((dt)=>{
            str+=`
            <li><span><h3>${dt.name}</h3></span> <span><i onclick="handleEdit('${dt._id}')" class="bi bi-pencil"></i><i onclick="handleDelete('${dt._id}')" class="bi bi-trash"></i></span></li>
                            <p>${dt.phone}</p>
            `            
        })
        document.getElementById("list-data").innerHTML=str
    }
    
            
    } catch (error) {
        console.log(error);
        
    }
}

getContacts()

async function handleEdit(_id) {
    const name=prompt("Edit name :")
    const phone=prompt("Edit phone :")
    const res=await fetch(`http://localhost:3000/api/update/${_id}`,{
        method:"PUT",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({name,phone})
    })
    if(res.status==201){
        const {msg}=await res.json()
        alert(msg)
        getContacts()
    }
}

async function handleDelete(_id) {
    const res=await fetch(`http://localhost:3000/api/delete/${_id}`,{
        method:"DELETE",
        headers:{"Content-Type":"application/json"},
    })
    console.log(res);
    if(res.status==200){
        alert("deleted successfully")
        getContacts()
    }    
}