let frase = prompt("Ingresa una frase");
let a = "a";
let cantidadA = 0;


for (var i = 0; i < frase.length; i++) {
    if (frase[i] === a) {
        cantidadA++;
    }

}

console.log("La cantidad de veces que se repite la letra 'a' en la frase es: ", cantidadA);