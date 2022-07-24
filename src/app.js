const express = require('express')
const path = require('path')
const hbs = require('hbs')
const forcast = require('./utils/weatherForecast')

const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
const publicPath = path.join(__dirname, '../public')
const app = express()


hbs.registerPartials(partialsPath)
app.set('view engine', 'hbs')
app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.use(express.static(publicPath))

app.get('', (req, res)=>{

    res.render('index', {
        title: 'Weather'
    })
})

app.get('/help', (req, res)=>{

    res.render('help', {
        title: 'Help'
    })
})

app.get('/about', (req, res)=>{

    res.render('about', {
        title: 'About'
    })
})


app.get('/weather', (req, res)=>{

    if(!req.query.location){
        console.log('please provide valid input for location')
    }

    forcast(req.query.location, (error, {temperature = 0,feelslike = 0} = {})=>{

        if(error){
            res.send({
                error
            })
        }

        res.send({
            forecast: temperature,
            location: req.query.location
        })
    })
   
})



app.get('*', (req, res)=>{

    res.render('404', {
        title: '404: not found'
    })
})

app.listen(3000)
