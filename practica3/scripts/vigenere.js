module.exports = {
    create: function () {
        return new Vigenere()
    }
}

class Vigenere {

    async detectarRepetidas(data) {
        var contadorGen = 0
        var listaRepetidos = []
        var repetido = {}
        var texto = data.split("")

        while (contadorGen < texto.length) {
            var actual = texto[contadorGen]
            var contTemp = 1
            for (let index = contadorGen + 1; index < texto.length; index++) {
                const element = texto[index];
                contTemp++
                if (element == actual && texto[contadorGen + 1] == texto[index + 1] && texto[contadorGen + 2] == texto[index + 2]) {
                    repetido.cadena = actual + texto[index + 1] + texto[index + 2]
                    repetido.espacio = contTemp + 3

                    contTemp = 1
                    listaRepetidos.push(repetido)
                    repetido = {}
                }
            }
            contadorGen++
        }
        console.log(listaRepetidos);
        var espacios = []
        listaRepetidos.forEach(element => {
            espacios.push(element.espacio)
        });
        return { valid: "OK", result: listaRepetidos, mcd: Math.gcd.apply(null, espacios)}
    }

    async dividirTexto(data) {
        return "OK dividirTexto"
    }

    async ataqueEstadistico(data) {
        return "OK ataqueEstadistico"
    }

    async desencriptar(data) {
        return "OK desencriptar"
    }
}

Math.gcd = function () {
    if (arguments.length == 2) {
        if (arguments[1] == 0)
            return arguments[0];
        else
            return Math.gcd(arguments[1], arguments[0] % arguments[1]);
    } else if (arguments.length > 2) {
        var result = Math.gcd(arguments[0], arguments[1]);
        for (var i = 2; i < arguments.length; i++)
            result = Math.gcd(result, arguments[i]);
        return result;
    }
};