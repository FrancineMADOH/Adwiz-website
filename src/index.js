const path = require('path')
const express = require('express');
const hbs = require('hbs')
const port = process.env.PORT || 3000

const app = express();
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname , '../views'))
app.use(express.static(path.join(__dirname,'../public')))
hbs.registerPartials(path.join('../views/partials'))


//setting up the routes for adwiz.cm
app.get('/', (req,res)=>{
    res.render('index', { title: "my title"})
})
app.get('/about', (req,res)=>{
    res.send('about adwiz')
})

app.get('/services', (req,res)=>{
    res.send('about adwiz')
})

app.get('/services/kaizen', (req,res)=>{
    res.send('adwiz kaizen services')
})
app.get('/services/r&d', (req,res)=>{

    res.send('recherche et developement ')

})

app.get('/services/bds', (req,res)=>{
    res.send('about service d\'appuie aux pme')
})

app.get('/services/cad', (req,res)=>{
    res.send('conception assiste par ordinateur  adwiz')
})

app.get('services/farmadwiz', (req,res)=>{

    res.send('farmadwiz le projet')

})

app.get('/404', (req,res)=>{
    res.render('404')
})


//listening to our port 

app.listen(port, ()=>{
    console.log('listening on port 3000...');
})