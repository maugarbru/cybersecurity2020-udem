module.exports = {
    create: function () {
        return new Vigenere()
    }
}

class Vigenere {

    /**
     * Función que detecta los grupos de 3 caracteres repetidos en el texto y el espacio
     * que los separa entre ellos. Utilizando el mcd entre dichos espacios encontrados,
     * podremos encontrar la longitud probable de la clave.
     * @param {*} data es el string que contiene todo el texto
     */
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
        return { valid: "OK", result: listaRepetidos, mcd: Math.gcd.apply(null, espacios) }
    }

    /**
     * Función que separa el texto (criptograma) en subtextos teniendo en cuento la
     * longitud de la clave hallada en el paso anterior.
     * @param {*} data es el string que contiene todo el texto
     * @param {*} longitudClave es la cantidad hallada en la función anterior.
     */
    async dividirTexto(data, longitudClave) {
        var texto = data.split("")
        var subtextos = []
        for (let i = 0; i < longitudClave; i++) {
            var sub = ""
            for (let j = i; j < texto.length; j += longitudClave) {
                sub += texto[j]
            }
            subtextos.push(sub)
        }
        console.log(subtextos);

        return { cantidad: subtextos.length, subtextos: subtextos }
    }

    /**
     * Función que analiza las frecuencias de las letras en los subtextos separados
     * anteriormente y encuentra las frecuencias relativas con la redundancia del lenguaje.
     * Teniendo como las mas frecuentes en el español A, E (a 4 posiciones relativas a la A)
     * y O (a 11 posiciones relativas a la E). Para así poder encontrar la posible clave. 
     * @param {*} data es el grupo de subtextos encontrados en la función anterior.
     */
    async ataqueEstadistico(data) {
        var subtextos = []
        var frecuencias = []
        var clave = []

        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            var frecuencia = {
                cadena: index + 1,
                original: [],
                relativa: []
            }
            subtextos.push(element.split(""))
            frecuencias.push(frecuencia)
        }

        // ENCONTRAR FRECUENCIAS DE LAS LETRAS EN LOS SUBTEXTOS
        for (let i = 0; i < subtextos.length; i++) {
            const sub = subtextos[i];

            for (let j = 0; j < abecedario.length; j++) {
                const letra = abecedario[j];

                var long = sub.filter(el => el == letra).length
                frecuencias[i].original.push({ letra: letra, frecuencia: long })
            }
        }

        // ENCONTRAR FRECUENCIAS RELATIVAS (A, E (+4) y O (+11))
        for (let i = 0; i < frecuencias.length; i++) {
            const subtexto = frecuencias[i];
            var mayor = -1
            var mayor2 = -1
            var letraMayor = ""
            var letraMayor2 = ""

            for (let j = 0; j < subtexto.original.length; j++) {
                var fRelativa = 0
                var posicion1 = j
                var posicion2 = posicion1 + 4
                var posicion3 = posicion2 + 11

                fRelativa += subtexto.original[posicion1].frecuencia

                if (posicion2 < subtexto.original.length) {
                    fRelativa += subtexto.original[posicion2].frecuencia
                } else {
                    fRelativa += subtexto.original[(posicion2) - subtexto.original.length].frecuencia
                }

                if (posicion3 < subtexto.original.length) {
                    fRelativa += subtexto.original[posicion3].frecuencia
                } else {
                    fRelativa += subtexto.original[(posicion3) - subtexto.original.length].frecuencia
                }

                if (fRelativa > mayor) {
                    mayor = fRelativa
                    letraMayor = subtexto.original[j].letra
                } else if (fRelativa == mayor) {
                    letraMayor += subtexto.original[j].letra
                }
                subtexto.relativa.push({ letra: subtexto.original[j].letra, frecuencia: fRelativa })
            }
            clave.push(letraMayor)
        }
        console.log(clave);
        
        return "OK ataqueEstadistico"
    }

    async desencriptar(data) {
        return "OK desencriptar"
    }
}

// FUNCION PARA ENCONTRAR EL MCD MAXIMO COMUN DIVISOR
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

const abecedario = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] 