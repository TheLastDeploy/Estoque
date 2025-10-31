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

app.listen(3000,()=>
console.log('servidor rodando em http://localhost:3000')
)