
const express = required('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

mongoose.connect('mongodb+srv://sangamtmagar46:valentino46@@cluster0.f5f7u.mongodb.net/')
.then(()=>console.log('MongoDB connected'))
.catch(error=>console.log(error));


const app = express()
const PORT = process.env.PORT || 5000;

app.use(
  cors({})
)