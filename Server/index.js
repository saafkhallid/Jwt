const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const passport = require("passport");


//Import Routes
const authRoutes = require('./routes/auth');
const pageRoutes = require('./routes/pages')


//Config App
require('dotenv').config();
require('./config/db');
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

const corsOptions = {
    origin: 'http://localhost:3000', 
    credentials: true,
    // optionSuccessStatus: 200
}
app.use(cors(corsOptions))

// CORS Handling
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE');
//         return res.status(200).json({});
//     }
//     next();
// });


//Middlewares
// app.use(cors())
app.use(expressValidator())
if (process.env.NODE_ENV === 'developpement') app.use(morgan('dev'));

//Routes Middleware
app.use('/api', authRoutes);
app.use('/api/pages', pageRoutes);


// Passport Middleware
// app.use(passport.initialize());
// require("./config/passport")(passport);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`app is running on port ${port}`));