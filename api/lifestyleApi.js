const express = require('express');

const app = express();
const port = 3000;
app.use(express.json())


lifestyles = [
    {name: 'Corredor',
    habitos: [{ name: "Prueba",
                last_mod: new Date(),
                strikeCount: 0,
                strikeHistoricMax: 0,
                habitIcon: 'anchor',
                dias:  {lunes: true, martes: true, miercoles: true, jueves: true, viernes: true, sabado: true, domingo: true}},
                { name: "Prueba2",
                last_mod: new Date(),
                strikeCount: 0,
                strikeHistoricMax: 0,
                habitIcon: 'anchor',
                dias:  {lunes: true, martes: true, miercoles: true, jueves: true, viernes: true, sabado: true, domingo: true}}
            ]
    },
    {name: 'Programador',
    habitos: [{ name: "PruebaProgra",
                last_mod: new Date(),
                strikeCount: 0,
                strikeHistoricMax: 0,
                habitIcon: 'anchor',
                dias:  {lunes: true, martes: true, miercoles: true, jueves: true, viernes: true, sabado: true, domingo: true}}]
    }]


app.get('/hola', (req, res) => {
    res.send(lifestyles);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))