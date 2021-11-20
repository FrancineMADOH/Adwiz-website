const path = require('path')
const express = require('express');
const hbs = require('hbs')
const port = process.env.PORT || 3000

const app = express();
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname , '../views'))
app.use(express.static(path.join(__dirname,'../public')))
hbs.registerPartials(path.join(__dirname , '../views/partials'))
//console.log(path.join(__dirname,'../public'));


//setting up the routes for adwiz.cm
app.get('/', (req,res)=>{
    res.render('index', { title: "my title"})
})
app.get('/about', (req,res)=>{
    res.render('about',{
        titre1:'À-Propos d\'Adwiz',
        titre2:'Nos Recompenses',
        titre3:'Ils nous ont fait confiance...'
    })
})

app.get('/services', (req,res)=>{
    res.render('services', {
        titre1:'',
        titre2:'',
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
app.get('/services/propriete-intellectuelle', (req,res)=>{
    res.render('pi')
})

app.get('/services/bds', (req,res)=>{
    res.render('bds')
})

app.get('/services/cad', (req,res)=>{
    res.render('cad')
})

app.get('/services/farmadwiz', (req,res)=>{

    res.render('farmadwiz')

})
//unknow route 
app.get('*', (req,res)=>{
    res.render('notfound')
})




//listening to our port 

app.listen(port, ()=>{
    console.log('listening on port 3000...');
})