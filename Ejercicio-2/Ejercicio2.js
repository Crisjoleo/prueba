//  4-7+8+9/2*3  Entrada
// Salida 18.5

//Dividir la cadena en  partes,
// Se crea una  funcion que realice las divisiones y multiplicaciones de izquierda a derecha
// Se crea una funcion que hace las sumas de izquierda a derecha
// Para realizar la operacion primero haremos las multiplicaciones/divisiones y luego las sumas/restas

//revisar de izquierda a derecha buscando multiplicacion o division
// realizar las multplicaciones o divisiones encontradas
//

var operations = " 4-7+8+9/2+9+9+9+9+8+8+8+8+8*3+8";
//var multi = multOrDiv(multiplicacion);
function divideStrings(string) { // Funcion para dividir la cadena en numeeros y simbolos 
  let dividedString = string.split(/([*/+-])/);

  return dividedString;
}

function multOrDiv(operators) { // funcion para realizar las mutiplicaciones /diviciones , en el orden de izquierda ad erecha que se encuentren en la cadena 
  while (
    (((i = operators.indexOf("*")), (j = operators.indexOf("/"))),  // mientras encuentre un siimbolo de multiplicacion/division en la cadena se ejecutara este codigo
    i > 0 || j > 0)
  ) {
    if ((i < j && i != -1) || j == -1) { // se compara si el simbolo encontrado es una multiplicacion o division
      var mult = operators.splice(
        i - 1,                                                        // 
        3,
        parseFloat(operators[i - 1] * parseFloat(operators[i + 1]))  // se toma el elemento anterior y depues del simbolo * para realizar su multiplicacion , luego se eliminan los 3 elementos y se inserta el resultado
      );
    } else {
      var div = operators.splice(
        j - 1,
        3,
        parseFloat(operators[j - 1] / parseFloat(operators[j + 1])) // mismo proceso que la multiplicacion 
      );
    }
  }
  return operators;
}
function operate(operations) {
  splitOperations = divideStrings(operations);
  var result = sumOrRest(multOrDiv(splitOperations));
  return result;
}
function sumOrRest(operatorsSum) {
  while (
    (((k = operatorsSum.indexOf("+")), (l = operatorsSum.indexOf("-"))),
    k > 0 || l > 0)
  ) {
    if ((l < k && l != -1) || k == -1) {
      var rest = operatorsSum.splice(
        l - 1,
        3,
        parseFloat(operatorsSum[l - 1]) - parseFloat(operatorsSum[l + 1])
      );
    } else {
      var sum = operatorsSum.splice(
        k - 1,
        3,
        parseFloat(operatorsSum[k - 1]) + parseFloat(operatorsSum[k + 1])
      );
    }
  }
  return operatorsSum;
}

console.log("Estas fueron lsa operaciones", operations);

console.log(operate(operations), "Este es el resultado");
