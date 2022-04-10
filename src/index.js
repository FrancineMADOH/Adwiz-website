const path = require('path')
const express = require('express');
const hbs = require('hbs')
const nodemailer = require('nodemailer')
const multyparty = require('multiparty')
const dotenv = require('dotenv').config()
const cors =  require('cors')
//const body-parser = require('body')
const port = process.env.PORT || 3000

const app = express();
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname , '../views'))
app.use(express.static(path.join(__dirname,'../public')))
app.use(cors({origin:'*'}))
app.use(express.urlencoded({extended:false}))
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

const transporter = nodemailer.createTransport({
    service:'gmail',
    host:"smtp.gmail.com",
    port: 587,
    secure:false,
    debug:true,
    ignoreTLS:true,
    tls:{
        rejectUnauthorized:false,
        secureProtocol: "TLSv1_2_method",
    },
    auth: {
        user: 'mail4adwiz@gmail.com',//process.env.EMAIL,
        pass: "########"//process.env.PASS
    }
})
//verify our conection configuration

transporter.verify(function(error, success){
    if(error){
        console.log(error);
    }else {
        console.log('Server is ready to take our message');

    }
})

//send our mail via post request
app.post('/sendemail', (req,res)=>{

    let form = new multyparty.Form();
    let data = {
        email: req.body.email,
        name: req.body.name,
        message:req.body.message
    };

    // form.parse(req, function(error, fields){
    //     console.log(fields);
    //     Object.keys(fields).forEach(function(property){
    //         data[property] =  fields[property].toString()
    //     })

    // });

    const mail = {
        from: 'francinemadoh@gmail.com', 
        to: 'mail4adwiz@gmail.com', //process.env.EMAIL,
        subject: 'Un utilisateur a contacte Adwiz',
        text: 'Je voudrai un accompagnement en propriete intellectuelle'//`${data.name} <${data.email}> \n${data.message}`
    }

    transporter.sendMail(mail, (err, data)=>{
        if(err){
            console.log(err);
            res.status(500).send('something went wrong while sending the email');
        }else{
            res.send.status(200).send('Email sucessfully send to recipient')
        }
    })
})


//https://lo-victoria.com/how-to-build-a-contact-form-with-javascript-and-nodemailer


//listening to our port 

app.listen(port, ()=>{
    console.log('listening on port 3000...');
})