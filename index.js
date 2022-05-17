// const express = require('express');
// const bodyParser =require('body-parser');
// const usersRouter = require('./routes/users');

import express from 'express';
import bodyParser from 'body-parser'
import usersRoutes from './routes/users.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/users', usersRoutes)

app.get('/',  (req,res)=>{ res.send('Hello from home page')});

app.listen(PORT, () => console.log('server runnin on PORT: http://localhost:5000'))