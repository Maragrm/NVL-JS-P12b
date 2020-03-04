function main(){
    var pares = [];
    var impares = [];
    var arrayNumerosAleatorios = [];
//Calculamos el array y lo semparamos
arrayNumerosAleatorios = rellenarArrayNumerosAleatorios();
separarNumerosAleatorios(pares, impares, arrayNumerosAleatorios);

//Mostrar por pantalla
console.log("ArrayNumerosAleatorios: " + arrayNumerosAleatorios);
console.log("Pares: " + pares);
console.log("Impares: " + impares);
}

/**
 * Funcion que se encarga de rellenar un array de numeros aleatorios
 * @return arrayNumerosLocal Array con los numeros aleatorios rellenos.
 */
function rellenarArrayNumerosAleatorios(){
    var numeroAleatorio;
    var arrayNumerosLocal = [];
    for (var i = 0; i < 50; i++){
        numeroAleatorio = Math.floor(Math.random() * 100 + 1);
        arrayNumerosLocal [i] = numeroAleatorio;
    }
    return arrayNumerosLocal;
}

/**
 * Se encarga de separar los numeros de un array dado en dos arrays diferentes entre pares e impares.
 * @param {array de numeros pares} pares
 * @param {array de numeros impares} impares
 * @param {array que quiero ordenar} arrayNumerosAleatoriosFunctionSeparar
 */
function separarNumerosAleatorios(pares, impares, arrayNumerosAleatoriosFunctionSeparar){
    for(var j = 0; j < arrayNumerosAleatoriosFunctionSeparar.length; j++){
        if(arrayNumerosAleatoriosFunctionSeparar[j] % 2 === 0){
            pares.push(arrayNumerosAleatoriosFunctionSeparar[j]);
        } else {
            impares.push(arrayNumerosAleatoriosFunctionSeparar[j]);
        }
    }
}
//llamada
main();