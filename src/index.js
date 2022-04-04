const path = require('path')
const express = require('express');
const hbs = require('hbs')
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
const port = process.env.PORT || 3000
//require(dotenv).config()

const app = express();
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname , '../views'))
app.use(express.static(path.join(__dirname,'../public')))
hbs.registerPartials(path.join(__dirname , '../views/partials'))

//setting up the routes for adwiz.cm
app.get('/', (req,res)=>{
    res.render('index', { title: "my title"})
})
app.get('/about', (req,res)=>{
    res.render('about',{
        titre1:'À-Propos d\'Adwiz',
        titre2:'Nos Récompenses',
        titre3:'Ils nous ont fait confiance...',
        titre4:'Une équipe dynamique et polyvalente â votre écoute!',
    })
})

app.get('/services', (req,res)=>{
    res.render('services', {
        titre1:'Nos Services',
        titre2:'Faites nous confiance !',
        titre3:''
    })
})
app.get('/contact', (req,res)=>{
    res.render('contact')
})

app.get('/services/kaizen', (req,res)=>{
    res.render('kaizen')
})
app.get('/services/r&d', (req,res)=>{

    res.render('recherche')

})
app.get('/services/pi', (req,res)=>{
    res.render('pi')
})

app.get('/services/bds', (req,res)=>{
    res.render('bds')
})

app.get('/services/cad', (req,res)=>{
    res.render('cad')
})

app.get('/services/farmadwiz', (req,res)=>{

    res.render('farmadwiz', {
        titre1: 'FarmAdwiz'
    })

})

//unknow route 
app.get('*', (req,res)=>{
    res.render('notfound')
})



//https://lo-victoria.com/how-to-build-a-contact-form-with-javascript-and-nodemailer


//listening to our port 

app.listen(port, ()=>{
    console.log('listening on port 3000...');
})