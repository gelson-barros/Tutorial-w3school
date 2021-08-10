//JavaScript Const

//ECMAScript 2015

/*
ES2015 introduziu duas novas palavras-chave JavaScript importantes: lete const.

Variáveis ​​definidas com const se comportam como let variáveis, exceto que não podem ser reatribuídas:
*/

const PI = 3.141592653589793;
PI = 3.14;      // Isso dará um erro
PI = PI + 10;   // Isso também gerará um erro

//Escopo do Bloco

/*
Declarar uma variável com const é semelhante a let quando se trata de Block Scope .

O x declarado no bloco, neste exemplo, não é o mesmo ox declarado fora do bloco:
*/

var x = 10;
// Aqui x é 10
{
    const x = 2;
    // Aqui x é 2
}
// Aqui x é 10

/*
Você pode aprender mais sobre Block Scope no capítulo anterior: JavaScript Let .
*/

//Atribuído quando declarado

/*
As const variáveis JavaScript devem receber um valor ao serem declaradas:
*/

//Incorreta
const PI;
PI = 3.14159265359;

//Correto
const PI = 3.14159265359;

//Constantes Não Reais

/*
A palavra const- chave é um pouco enganosa.

Ele NÃO define um valor constante. Ele define uma referência constante a um valor.

Por causa disso, não podemos alterar valores primitivos constantes, mas podemos alterar as propriedades de objetos constantes.

*/

//Valores primitivos

/*
Se atribuirmos um valor primitivo a uma constante, não podemos alterar o valor primitivo:
*/

const PI = 3.141592653589793;
PI = 3.14;      // Isso dará um erro
PI = PI + 10;   // Isso também gerará um erro

//Objetos constantes podem mudar

/*
Você pode alterar as propriedades de um objeto constante:
*/

// Você pode criar um objeto const:
const car = {type:"Fiat", model:"500", color:"white"};

// Você pode alterar uma propriedade:
car.color = "red";

// Você pode adicionar uma propriedade:
car.owner = "Johnson";

/*
Mas você NÃO pode reatribuir um objeto constante:
*/

const car = {type:"Fiat", model:"500", color:"white"};
car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR

//Matrizes constantes podem mudar

/*
Você pode alterar os elementos de uma matriz constante:
*/

// Você pode criar uma matriz constante:
const cars = ["Saab", "Volvo", "BMW"];

// Você pode alterar um elemento:
cars[0] = "Toyota";

// Você pode adicionar um elemento:
cars.push("Audi");

/*
Mas você NÃO pode reatribuir uma matriz constante:
*/

const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // ERROR

//Suporte para navegador

/*
A constpalavra-chave não é compatível com o Internet Explorer 10 ou anterior.

A tabela a seguir define as primeiras versões do navegador com suporte total para a constpalavra-chave:
*/

/*
Chrome 49	  IE / Edge 11	   Firefox 36	    Safari 10	   Opera 36
Mar, 2016	  Oct, 2013	        Feb, 2015	    Sep, 2016	   Mar, 2016
*/

//Redeclarando

/*
Redeclarar uma var variável JavaScript é permitido em qualquer lugar em um programa:
*/

var x = 2;    //  Permitido
var x = 3;    //  Permitido
x = 4;        //  Permitido

/*
Não é permitido redeclarar ou reatribuir uma variável existente varou , no mesmo escopo, ou no mesmo bloco:letconst
*/

var x = 2;         // Permitido
const x = 2;       // Não permitido
{
  let x = 2;     // Permitido
  const x = 2;   // Não permitido
}

/*
Não é permitido redeclarar ou reatribuir uma constvariável existente , no mesmo escopo ou no mesmo bloco:
*/

const x = 2;       // Permitido
const x = 3;       // Não permitido
x = 3;             // Não permitido
var x = 3;         // Não permitido
let x = 3;         // Não permitido

{
  const x = 2;   // Permitido
  const x = 3;   // Não permitido
  x = 3;         // Não permitido
  var x = 3;     // Não permitido
  let x = 3;     // Não permitido
}

/*
Redeclarar uma variável com const, em outro escopo, ou em outro bloco, é permitido:
*/

const x = 2;       // Permitido

{
  const x = 3;   // Permitido
}

{
  const x = 4;   // Permitido
}

//Elevação(Hoisting)

/*
Variáveis ​​definidas com varsão içadas para o topo e podem ser inicializadas a qualquer momento (se você não sabe o que é içamento, leia nosso Capítulo Içamento ).

Significado: você pode usar a variável antes de ser declarada:
*/

/*
Isso está certo:
*/
carName = "Volvo";
alert(carName);
var carName;

/*
As variáveis ​​definidas com const são içadas para o topo do bloco, mas não inicializadas.

Significado: O bloco de código está ciente da variável, mas não pode ser usado até que seja declarado.

A variável está em uma "zona morta temporal" desde o início do bloco até ser declarada.

Usar uma const variável antes de ser declarada é um erro de sintaxe, portanto, o código simplesmente não será executado.
*/

carName = "Volvo";
const carName;