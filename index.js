const express = require('express')
const app = express()
const path =require('path')

//settings
app.set('port', 3000)


//routes

app.get('/',(req,response)=>{
    response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get('/contacto',(req,response)=>{
    response.sendFile(path.resolve(__dirname, 'contacto.html'))
})


app.listen(app.get('port'), ()=>{
    console.log(`app corriendo en puerto ${app.get('port')}`)
})