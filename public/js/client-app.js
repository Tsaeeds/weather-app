
console.log("Client side javascript")



const form =  document.querySelector('form')
const input = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')



form.addEventListener('submit', (e)=>{

    e.preventDefault()

    message1.textContent = "Loading..."
    message2.textContent = ''

    fetch('http://localhost:3000/weather?location='+ input.value).then( (response) =>{
    
    response.json().then((data)=>{

        if(data.error){
            message2.textContent = data.error
        }else{
            message1.textContent = "it is " + data.forecast + " degrees in " + data.location
        }
    })

})
    
})

