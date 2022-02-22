const express = require('express');

const app = express();
const port = 3000;
app.use(express.json())


lifestyles = [
    {name: 'Corredor',
    habitos: [{ name: "Correr 20 min",
                last_mod: new Date(),
                strikeCount: 0,
                strikeHistoricMax: 0,
                habitIcon: 'user',
                dias:  {lunes: true, martes: true, miercoles: true, jueves: true, viernes: true, sabado: true, domingo: true}},
                { name: "Vitaminas",
                last_mod: new Date(),
                strikeCount: 0,
                strikeHistoricMax: 0,
                habitIcon: 'droplet',
                dias:  {lunes: true, martes: true, miercoles: true, jueves: true, viernes: true, sabado: true, domingo: true}},
                { name: "20 Sentadillas",
                last_mod: new Date(),
                strikeCount: 0,
                strikeHistoricMax: 0,
                habitIcon: 'arrowDown',
                dias:  {lunes: true, martes: true, miercoles: true, jueves: true, viernes: true, sabado: true, domingo: true}},
            ]
    },
    {name: 'Programador Senior',
    habitos: [{ name: "Resolver problema",
                last_mod: new Date(),
                strikeCount: 0,
                strikeHistoricMax: 0,
                habitIcon: 'codePen',
                dias:  {lunes: true, martes: true, miercoles: true, jueves: true, viernes: true, sabado: true, domingo: true}},
                { name: "Pushear a Git",
                last_mod: new Date(),
                strikeCount: 0,
                strikeHistoricMax: 0,
                habitIcon: 'github',
                dias:  {lunes: true, martes: true, miercoles: true, jueves: true, viernes: true, sabado: true, domingo: true}}]
    },
    {name: 'Meditar',
    habitos: [{ name: "Meditar 10 min",
                last_mod: new Date(),
                strikeCount: 0,
                strikeHistoricMax: 0,
                habitIcon: 'smile',
                dias:  {lunes: true, martes: true, miercoles: true, jueves: true, viernes: true, sabado: true, domingo: true}}]
    }]


app.get('/hola', (req, res) => {
    res.send(lifestyles);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))