
console.log("Client side javascript")

fetch('http://localhost:3000/weather?location=boston').then( (response) =>{
    response.json().then((data)=>{

        if(data.error){
            console.log(error)
        }else{
            console.log(data)
        }
    })

})