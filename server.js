const express = require ('express')//Importing express into this file.
const app = express()
const sqlite = require('sqlite3')

const db = new sqlite.Database('/db/concert.db', (err)=>{
if(err){
    console.log(err)
}
else{
    //Any route that need db connectivity and service go inside here.
}
})


app.get('/home', (request, response) =>{
    response.send('<h1>Hello world </h1>')
})
app.get('/faq', (request, response) =>{
    response.send('<h1>Hello world FAQ </h1>')
})



app.listen(5000, ()=>{
    console.log("Server is running.....")
})