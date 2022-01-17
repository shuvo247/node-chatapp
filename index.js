// External Require
const express = require('express');
const dotenv = require('dotenv');
const app   = express();
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
// Ineternal Imports
const loginRouter = require('./router/loginRouter');
const userRouter = require('./router/userRouter');
const inboxRouter = require('./router/inboxRouter');
const {notFoundHandler,errorHandler} = require('./middlewares/common/errorHandler');




dotenv.config();
// Database Connection 
mongoose.connect(process.env.MONGO_CONNECTION_STRING,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
})
.then( () => console.log('Database connection successfully') )
.catch( (err) => console.log(err) );


// Requewst parser
app.use(express.json());
app.use(express.urlencoded({extended : true}));
// app.use(notFoundHandler);
// app.use(errorHandler);


// Set view engine
app.set('view engine','ejs');

// set static folder

app.use(express.static(path.join(__dirname,'public')));
app.use(cookieParser(process.env.COOKIE_SECRET));

// Routing setup

app.use('/',loginRouter);
app.use('/users',userRouter);
app.use('/inbox',inboxRouter);



// App listen 

app.listen(process.env.PORT,() => {
    console.log(`App listening to port ${process.env.PORT}`);
});