const express = require('express');
const holamundo = express();
holamundo.get('/', (req, res) =>
res.send('Hola Mundo!'));

//MULTIPLICACION PASANDO 2 PARAMETROS POR URL - VICTOR MARTINEZ - 20230621.
holamundo.get('/multiplicar/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const resultado = num1 * num2;
    res.send(`Resultado de la multiplicación es: ${resultado}`);
});


holamundo.get('/sumar/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const resultado = num1 + num2;
    res.send(`Resultado de la suma es: ${resultado}`);
});


holamundo.get('/restar/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const resultado = num1 - num2;
    res.send(`Resultado de la resta es: ${resultado}`);
});

module.exports = holamundo;
