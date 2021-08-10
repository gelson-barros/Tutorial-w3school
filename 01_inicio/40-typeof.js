//Tipo de JavaScript


/*
Em JavaScript, existem 5 tipos de dados diferentes que podem conter valores:

string
number
boolean
object
function
Existem 6 tipos de objetos:

Object
Date
Array
String
Number
Boolean
E 2 tipos de dados que não podem conter valores:

null
undefined
O tipo de operador
Você pode usar o typeofoperador para encontrar o tipo de dados de uma variável JavaScript.

Exemplo
typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"
Observe:

O tipo de dados de NaN é um número
O tipo de dados de uma matriz é objeto
O tipo de dados de uma data é objeto
O tipo de dados de nulo é objeto
O tipo de dados de uma variável indefinida é indefinido *
O tipo de dados de uma variável à qual não foi atribuído um valor também é indefinido *
Você não pode usar typeofpara determinar se um objeto JavaScript é uma matriz (ou uma data).

Dados primitivos
Um valor de dados primitivo é um único valor de dados simples sem propriedades e métodos adicionais.

O typeofoperador pode retornar um destes tipos primitivos:

string
number
boolean
undefined
Exemplo
typeof "John"              // Returns "string"
typeof 3.14                // Returns "number"
typeof true                // Returns "boolean"
typeof false               // Returns "boolean"
typeof x                   // Returns "undefined" (if x has no value)
Dados Complexos
O typeofoperador pode retornar um de dois tipos complexos:

function
object
O typeofoperador retorna "objeto" para objetos, matrizes e nulo.

O typeofoperador não retorna "objeto" para funções.

Exemplo
typeof {name:'John', age:34} // Returns "object"
typeof [1,2,3,4]             // Returns "object" (not "array", see note below)
typeof null                  // Returns "object"
typeof function myFunc(){}   // Returns "function"
O typeofoperador retorna " object" para matrizes porque em JavaScript as matrizes são objetos.

O tipo de dados do tipo de
O typeofoperador não é uma variável. É uma operadora. Os operadores (+ - * /) não possuem nenhum tipo de dados.

Porém, o typeofoperador sempre retorna uma string (contendo o tipo do operando).

A propriedade do construtor
A constructorpropriedade retorna a função construtora para todas as variáveis ​​JavaScript.

Exemplo
"John".constructor                // Returns function String()  {[native code]}
(3.14).constructor                // Returns function Number()  {[native code]}
false.constructor                 // Returns function Boolean() {[native code]}
[1,2,3,4].constructor             // Returns function Array()   {[native code]}
{name:'John',age:34}.constructor  // Returns function Object()  {[native code]}
new Date().constructor            // Returns function Date()    {[native code]}
function () {}.constructor        // Returns function Function(){[native code]}
Você pode verificar a propriedade constructor para descobrir se um objeto é um Array (contém a palavra "Array"):

Exemplo
function isArray(myArray) {
  return myArray.constructor.toString().indexOf("Array") > -1;
}

Ou ainda mais simples, você pode verificar se o objeto é uma função Array :

Exemplo
function isArray(myArray) {
  return myArray.constructor === Array;
}

Você pode verificar a propriedade do construtor para descobrir se um objeto é um Date(contém a palavra "Data"):

Exemplo
function isDate(myDate) {
  return myDate.constructor.toString().indexOf("Date") > -1;
}

Ou ainda mais simples, você pode verificar se o objeto é uma função Date :

Exemplo
function isDate(myDate) {
  return myDate.constructor === Date;
}

Indefinido
Em JavaScript, uma variável sem valor possui o valor undefined. O tipo também é undefined.

Exemplo
let car;    // Value is undefined, type is undefined
Qualquer variável pode ser esvaziada, definindo o valor para undefined. O tipo também será undefined.

Exemplo
car = undefined;    // Value is undefined, type is undefined
Valores Vazios
Um valor vazio não tem nada a ver com undefined.

Uma string vazia tem um valor e um tipo legais.

Exemplo
let car = "";    // The value is "", the typeof is "string"
Nulo
Em JavaScript nullé "nada". Deve ser algo que não existe.

Infelizmente, em JavaScript, o tipo de dados de nullé um objeto.

Você pode considerá-lo um bug em JavaScript que typeof nullé um objeto. Deve ser null.

Você pode esvaziar um objeto configurando-o para null:

Exemplo
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null;    // Now value is null, but type is still an object
Você também pode esvaziar um objeto configurando-o para undefined:

Exemplo
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = undefined;   // Now both value and type is undefined
Diferença entre indefinido e nulo
undefinede nullsão iguais em valor, mas diferentes em tipo:

typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true
*/