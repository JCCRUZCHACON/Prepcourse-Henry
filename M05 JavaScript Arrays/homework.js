/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array [0];
}



function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array [array.length-1];
}



function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}



function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:

   for (var i = 0; i < array.length; i ++) {
        array [i] = array[i] + 1;
   }
   return array;
}
var array = [1,3,5,8,10]  //EL ARRAY SE VA A INCREMENTAR EN UNO
console.log(incrementarPorUno(array));  // TOTAL = 




function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}



function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}



function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:


   /*var unir = palabras.join(" ");           // PRIMERA SOLUCION CON JOIN CONVIERTE UN ARREGLO EN STRING
   return unir;*/                             // OJO : CON UN ESPACIO ENTRE COMILLAS, JOIN UNE UN ARREGLO EN STRING


   var cadena = "";                           // SEGUNDA SOLUCION CON FOR

   for(var i = 0; i < palabras.length; i ++){
      if(i===palabras.length-1){
         cadena = cadena + palabras[i];
      }else{
         cadena = cadena + palabras[i] + " " ;     // ESPACIO ENTRE LAS COMILLAS
      }
   }
   return cadena;
}
console.log(dePalabrasAFrase("h  o    l    a"));



function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:

   for(var i = 0; i < array.length; i++){
      if (array[i] === elemento){
         return true;
         }
      }
      return false;
   }
   var array = [1,2,3,4,5] ; //ARRAY DE ELEMENTOS
   var elemento = 3 ;           //CONTIENE EL ELEMENTO
   console.log(arrayContiene(array, elemento));  //TOTAL=
  


function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:

   var suma = 0;

   for(var i = 0; i < arrayOfNums.length; i ++){
      suma = suma + arrayOfNums[i];
   }
   return suma; 
}
var arrayOfNums= [1,3,4,6]  // SUMA DE LOS ELEMENTOS
console.log(agregarNumeros(arrayOfNums)); //TOTAL =



function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:

   var suma = 0;                                                          

   for(var i = 0; i < resultadosTest.length; i ++){
      suma = suma + resultadosTest[i];
   }
   var promedio = (suma / resultadosTest.length);

   return promedio;
}
var resultadosTest =[2,3,5,10] // SUMA DE ELEMNTOS = 20
//PROMEDIO =  20 / 4 = 5  PROMEDIO DE LAS NOTAS
console.log(promedioResultadosTest(resultadosTest));  //TOTAL =



function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:

   var maximo = 0;
   for(var i = 0; i < arrayOfNums.length; i ++){
      if (arrayOfNums[i] > maximo){
         maximo = arrayOfNums[i];
      }
   }
   return maximo ;
}
var arrayOfNums = [2,4,7,9,12,21]  //ARREGLO DE NUMEROS Y RETORNA EL NUMERO MAS GRANDE
console.log(numeroMasGrande(arrayOfNums));



function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if(arguments.length < 1) return 0;
   var total =1 ;
   for(var i = 0; i < arguments.length; i ++){
      total = total * arguments[i];
   }
   return total;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:

   var contador = 0;
   for(var i = 0; i< array.length; i ++){
      if (array[i] > 18){
         contador = contador + 1;
      }
   }
   return contador;
}
var array = [20,34,16,19,56,10];   // CUENTA LOS NUMEROS MAYORES A 18 
console.log(cuentoElementos(array));  // TOTAL =

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 1 || numeroDeDia === 7){
      return "Es fin de semana";
   }
   return "Es dia laboral";
}

var numeroDeDia = 7
console.log(diaDeLaSemana(numeroDeDia));


function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:

   if (num.toString()[0] === "9") return true;     //EL METODO toString CAMBIA UNA VARIABLE DE NUMERO A STRING
   return false;
}

var num = [9];
console.log(empiezaConNueve(num));


function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:

   var flag = array [0];      // flag  MANTIENE UN MISMO VALOR EN EL ARREGLO
   for (var i = 0; i < array.length; i ++){
      if(array[i] !== flag){ 
         return false;
      }
   }
   return true;
}

var array = [5,5,5,];
console.log(todosIguales(array));



function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:

   var nuevoArreglo = [];

   for (var i = 0; i < array.length; i ++){
      if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
         nuevoArreglo.push(array[i]);
      }
   }
   if (nuevoArreglo.length === 3) return nuevoArreglo;
      return "No se encontraron los meses pedidos"
}

var array = ["Enero","Marzo", "Noviembre"]
console.log(mesesDelAño(array));



function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tabla = [];
   for(var i = 0; i <= 10; i++){
      tabla.push(i * 6)
   }
   return tabla;
}
console.log(tablaDelSeis());


function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var nuevoArray = [];
   for (let i = 0; i < array.length; i++) {
      if (array[i] > 100)
         nuevoArray.push(array[i]);   
   }
   return nuevoArray;
}
var array = [203,100,54,32,108,124,180]
console.log(mayorACien(array));


/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var array = [];
   for (let i = 0; i < 10; i++) {
      array.push(num +=2)  //num = num + 2
      if(i === num)
         break;  
   }
   if(array.length< 10)
   return "Se interrumpió la ejecución"
   else
      return array
}
var num = [2]
console.log(breakStatement(num));

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var array = [];
   for (let i = 0; i < 10; i++) {
      if(i === 5)
      continue
      num += 2;  // num = num + 2
      array.push(num)    
   }
   return array;
}
var num = [2]
console.log(continueStatement(num));


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
