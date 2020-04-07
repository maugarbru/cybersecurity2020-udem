var path = require("path")
var bodyParser = require("body-parser");
const cors = require("cors")
var express = require("express")
const fs = require("fs")

const escitala = require('./scripts/escitala').create()
const vigenere = require('./scripts/vigenere').create()

var app = express();
app.use(cors())
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
    bodyParser.urlencoded({
        extended: true,
        limit: "50mb",
        parameterLimit: 50000
    })
);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/front/index.html"))
})

app.get('/escitala/descifrar', (req, res) => {
    var texto = req.query.text
    var llave = req.query.key
    console.log("----------------------------");
    console.log("... DESCIFRANDO ESCÍTALA ...");
    console.log(`Texto: "${texto}" >> (Llave: ${llave})`);
    escitala.desencriptar(texto, llave).then(response => {
        res.status(200).send(response)
        console.log(`Texto descifrado ->> "${response.texto}"`);
    }).catch(error => {
        res.status(400).send(error)
        console.log(error);
    })
})

app.get('/escitala/cifrar', (req, res) => {
    var texto = req.query.text
    var llave = req.query.key
    console.log("-------------------------");
    console.log("... CIFRANDO ESCÍTALA ...");
    console.log(`Texto: "${texto}" >> (Llave: ${llave})`);
    escitala.encriptar(texto, llave).then(response => {
        res.status(200).send(response)
        console.log(`Texto cifrado ->> "${response.texto}"`);
    }).catch(error => {
        res.status(400).send(error)
        console.log(error);
    })
})

app.post('/vigenere', (req, res) => {
    var data = req.body
    var paso = data.paso
    console.log("---------------------------");
    console.log("... EJECUTANDO VIGENERE ...");
    switch (paso) {
        case 1:
            var info = data.info
            console.log(`--- Paso 1: Detectar repetidas ---`);
            vigenere.detectarRepetidas(info).then(response => {
                setTimeout(() => {
                    res.status(200).send(response)
                }, 1500)
                console.log(`Resultado ->> "OK" -> MCD: ${response.mcd}`);
            }).catch(error => {
                res.status(400).send(error)
                console.log(error);
            })
            break;

        case 2:
            var info = data.info
            var mcd = data.mcd
            console.log(`--- Paso 2: Dividir Texto ---`);
            vigenere.dividirTexto(info, mcd).then(response => {
                setTimeout(() => {
                    res.status(200).send(response)
                }, 2500)
                console.log(`Resultado ->> "OK" -> Subtextos: ${response.cantidad}`);
            }).catch(error => {
                res.status(400).send(error)
                console.log(error);
            })
            break;

        case 3:
            var subtextos = data.subtextos
            console.log(`--- Paso 3: Ataque Estadistico ---`);
            vigenere.ataqueEstadistico(subtextos).then(response => {
                setTimeout(() => {
                    res.status(200).send(response)
                }, 2500)
                console.log(`Resultado ->> "${response}"`);
            }).catch(error => {
                res.status(400).send(error)
                console.log(error);
            })
            break;

        case 4:
            console.log(`--- Paso 4: Desencriptar ---`);
            vigenere.desencriptar(info).then(response => {
                setTimeout(() => {
                    res.status(200).send(response)
                }, 2500)
                console.log(`Resultado ->> "${response}"`);
            }).catch(error => {
                res.status(400).send(error)
                console.log(error);
            })
            break;
    }
})

port = 3000
app.listen(port, () => {
    console.log(`Crypto is running in: http://localhost:${port}`);
    console.log("Made by: Mauricio Garzón - Esteban Bedoya");
})