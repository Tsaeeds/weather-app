const request = require('request')

const weatherForecast = (location, callback) =>{
    const apiUrl = 'http://api.weatherstack.com/current?access_key=f27a404d7ec29230331602f1fcaab4dd&query='+ encodeURIComponent(location) +'&units=f'

request({url: apiUrl, json: true}, (error, {body})=>{
    if(error){
        callback("Unable to connect to the server..")
    }else if(body.error){
        callback("Couldn't get weather info")
    }
    else{
        callback(undefined ,{
            temperature: body.current.temperature,
            feelslike: body.current.feelslike
        })
        
    }
    
})
}

module.exports = weatherForecast;