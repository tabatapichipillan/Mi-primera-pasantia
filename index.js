const express = require('express')
const app = express()
const path =require('path')

//settings
app.set('port', 3000)


//routes
app.get('/',(req,res)=>{
    res.send('hola')
})

app.listen(app.get('port'), ()=>{
    console.log(`app corriendo en puerto ${app.get('port')}`)
})