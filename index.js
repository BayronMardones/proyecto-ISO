const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const placeRoutes = require('./routes/placeRoutes'); 

app.use(cors())
app.use(express.json());
app.options('*', cors());
app.use('/api', placeRoutes);

app.listen(process.env.PORT, () => console.log('Server started'));

mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.DB, (err) => {
    if(err){
        return console.log('Error al conectar con la base de datos => ', err)
        
    }
    return console.log('conectado a la base de datos')
});