import express from 'express';

import path from 'path';

import { fileURLToPath } from 'url';

import adminRotas from'./routers/admin.js';

const __fillname=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__fillname);

const app=express();

app.set('views',path.join(__dirname, 'views'));

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')));

app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.get('/',(req,res)=>res.render('./landing/index'));

app.use('/admin',adminRotas);

app.get('/login', (req, res) => {
    res.render('login'); 
});

app.post('/login', (req, res) => {
    res.send('Processando login...');
});

app.get('/termos', (req, res) => {
    res.render('termos'); 
});

app.post('/termos', (req, res) => {
    res.send('Processando termos...');
});
app.set('views', path.join(__dirname, 'views'))

app.listen(3000,()=>
console.log('servidor rodando em http://localhost:3000')
)