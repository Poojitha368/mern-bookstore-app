import express from 'express';
import {PORT,mongoDBURL} from './config.js';
import mongoose  from 'mongoose';   

const app = express();

app.get('/',(request,response)=>{
    console.log(request);
    return response.send('welcome to mern tutorial');
});


// route for save a book
app.post('/books',(request,response)=>{
    try{
        if ( !request.body.title || !request.author || request.publishYear){
            return response.status(400).send()
        }
    }catch(error){
        console.log(error.message);
    }
})

//database connection with app
mongoose.connect(mongoDBURL)
.then(()=>{
    console.log("App connected to database");
    app.listen(PORT,()=>{
    console.log(`App is listening to port : http://localhost:${PORT}`);
})
})
.catch((error)=>{
    console.log(error);
})