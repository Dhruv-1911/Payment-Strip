require("dotenv").config();
const { log } = require("console");
const express =require('express');
const app = express();
const fs = require('fs')

const stripe_Pkey= process.env.stripePublicKey
const stripe_Ckey= process.env.stripeSecretKey
const PORT = process.env.port


app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/store',(req,res)=>{
    fs.readFile('./item.json',(error,data)=>{
        if(error){
            res.status(500).end()
        }
        else{
            res.render('store.ejs',{
                stripePublicKey: stripe_Pkey,
               items: JSON.parse(data)
            })
        }
    })
})

// app.post('/purchase ',(req,res)=>{
//     fs.readFile('./item.json',(error,data)=>{
//         if(error){
//             res.status(500).end()
//         }
//         else{
//             console.log('puchase');
//         }
//     })
// })

app.listen(PORT ,()=>{
    console.log(`listening on ${PORT} port...`);
})