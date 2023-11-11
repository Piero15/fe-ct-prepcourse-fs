/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var newarray = Object.entries(objeto)
   return newarray
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var frecuenciaLetras = {};
   for (var i = 0; i < string.length; i++) {
      var letra = string[i];

      if (frecuenciaLetras.hasOwnProperty(letra)) {
         frecuenciaLetras[letra]++;
      } else {
         frecuenciaLetras[letra] = 1;
      }
   }

  return frecuenciaLetras;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayus = []
   var minus = []
   for(var i= 0; i<string.length; i++){
      if(string[i]==string[i].toUpperCase())mayus.push(string[i])
      else minus.push(string[i])
   }
   return mayus.join('')+minus.join('')
}
//console.log(capToFront("HOllaaBb"))

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabras = frase.split(' ')
   var invert = palabras.map(function(inv){
      return inv.split('').reverse().join("")
   })
   var asAmirr = invert.join(' ')
   return asAmirr
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var ext = numero.toString().split("").reverse().join("")
   if(numero == ext) return "Es capicua"
   else return "No es capicua"
}
//console.log(capicua(12))

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var newPal= ""
   var palabra = string.split('')
   for(var i=0; i<string.length; i++){
      if(palabra[i]== "a"||palabra[i]== "b"||palabra[i]== "c"){

      }else{
         newPal = newPal + palabra[i]
      }
   }
   return newPal
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var ordenado = arrayOfStrings.sort((a, b)=> a.length - b.length)
   return ordenado
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var newarray = []
   for(var i=0; i<array1.length; i++){
      var num1 = array1[i]
      for(var x=0; x<array2.length; x++){
         if(num1==array2[x])newarray.push(num1)
      }
   }
   return newarray
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
