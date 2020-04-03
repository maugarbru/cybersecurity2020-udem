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
        var cifrado = texto.split("");
        var matriz = [];
        for (let index = 0; index < rows; index++) {
            var rowTemporal = [];
            for (let index = 0; index < cols; index++) {
                if (cifrado[contador]) {
                    rowTemporal.push(cifrado[contador]);
                } else {
                    rowTemporal.push(" ");
                }
                contador++;
            }
            matriz.push(rowTemporal);
        }

        var descifrado = ""
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < matriz.length; j++) {
                descifrado += matriz[j][i]
            }
        }

        var json = {
            texto: descifrado.trim(),
            matriz: matriz
        }
        return json
    }
}