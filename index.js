const express = require('express');

const app = express()

//rounting
app.get('/', (req, res) => {
    res.send('Hola mundo en Express')
})
app.get('/ecommerce', (req, res) => {
    res.send('Hola este es el ecommerce')
})
app.get('/nosotros', (req, res) => {
    res.send('Nosotros somos nosotros')
})

app.listen(4000, () => {
    console.log('servidor funcionando');
})