module.exports = {
    create: function () {
        return new Escitala()
    }
}

class Escitala {

    async desencriptar(texto, llave) {
        var contador = 0;
        var rows = llave;
        var cols = Math.ceil(
            texto.length / llave
        );
        var original = texto.split("");
        var matriz = [];
        for (let index = 0; index < rows; index++) {
            var rowTemporal = [];
            for (let index = 0; index < cols; index++) {
                if (original[contador]) {
                    rowTemporal.push(original[contador]);
                } else {
                    rowTemporal.push(" ");
                }
                contador++;
            }
            matriz.push(rowTemporal);
        }
        var resultado = ""
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < matriz.length; j++) {
                resultado += matriz[j][i]
            }
        }
        var json = {
            texto: resultado.trim(),
            matriz: matriz
        }
        return json
    }

    async encriptar(texto, llave) {
        var contador = 0;
        var rows = llave;
        var cols = Math.ceil(
            texto.length / llave
        );
        var original = texto.split("");
        var matriz = [];
        for (let index = 0; index < cols; index++) {
            var rowTemporal = [];
            for (let index = 0; index < rows; index++) {
                if (original[contador]) {
                    rowTemporal.push(original[contador]);
                } else {
                    rowTemporal.push(" ");
                }
                contador++;
            }
            matriz.push(rowTemporal);
        }
        var resultado = ""
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < matriz.length; j++) {
                resultado += matriz[j][i]
            }
        }
        var json = {
            texto: resultado.trim(),
            matriz: matriz
        }
        return json
    }
}