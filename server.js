const express = require('express')
const app = express()
    //HBS
const hbs = require('hbs')
require('./hbs/helpers')

const port = process.env.PORT || 3000




app.use(express.static(__dirname + '/public'))

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs')

//helpers -- Se dispara cuando los templates lo requiren y estan disponibles para todos

app.get('/', (req, res) => {
    res.render('home.hbs', {
        nombre: 'David Garcia'
    })
})
app.get('/about', (req, res) => {
    res.render('about.hbs')
})

app.listen(port, () => {
    console.log(`Escuchando en ${port}`)
})