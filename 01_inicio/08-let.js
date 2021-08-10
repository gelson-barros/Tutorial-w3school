//JavaScript Let

//ECMAScript 2015

/*
ES2015 introduziu duas novas palavras-chave JavaScript importantes: let e const.

Essas duas palavras-chave fornecem variáveis ​​de escopo de bloco (e constantes) em JavaScript.

Antes do ES2015, o JavaScript tinha apenas dois tipos de escopo: Escopo Global e Escopo de Função . 
*/


//Escopo global

/*
Variáveis ​​declaradas globalmente (fora de qualquer função) têm escopo global .
*/
var carName = "Volvo";

// o código aqui pode usar carName

function myFunction() {
    // code aqui também pode usar carName
}

/*
Variáveis globais podem ser acessadas de qualquer lugar em um programa JavaScript.
*/

//Escopo da Função

/*
Variáveis ​​declaradas localmente (dentro de uma função) têm escopo de função .
*/

// o código aqui NÃO pode usar carName

function myFunction() {
    var carName = "Volvo";
    // código aqui PODE usar carName
}

// o código aqui NÃO pode usar carName

/*
Variáveis locais só podem ser acessadas de dentro da função onde foram declaradas.
*/

//JavaScript Escopo do bloco

/*
Variáveis ​​declaradas com a varpalavra - chave não podem ter Block Scope .

Variáveis ​​declaradas dentro de um bloco {} podem ser acessadas de fora do bloco.
*/

{
  var x = 2;
}
// x PODE ser usado aqui

/*
Antes do ES2015, o JavaScript não tinha Block Scope .

Variáveis ​​declaradas com a letpalavra - chave podem ter Block Scope.

Variáveis ​​declaradas dentro de um bloco {} não podem ser acessadas de fora do bloco:
*/

{
  let x = 2;
}
// x NÃO pode ser usado aqui

//Variáveis ​​de redeclaração

/*
Redeclarar uma variável usando a varpalavra - chave pode causar problemas.

Redeclarar uma variável dentro de um bloco também redeclarará a variável fora do bloco:
*/

var x = 10;
// Aqui x é 10
{
  var x = 2;
  // Aqui x é 2
}
// Aqui x é 2

/*
Redeclarar uma variável usando a letpalavra - chave pode resolver esse problema.

Redeclarar uma variável dentro de um bloco não redeclarará a variável fora do bloco:
*/

var x = 10;
// Aqui x é 10
{
    let x = 2;
    // Aqui x é 2
}
// Aqui x é 10

//Suporte para navegador

/*
A letpalavra-chave não é totalmente compatível com o Internet Explorer 11 ou anterior.

A tabela a seguir define as primeiras versões do navegador com suporte total para a letpalavra-chave:
*/

/*
Chrome 49	Edge 12	    Firefox 44  Safari 11	Opera 36
Mar, 2016	Jul, 2015	Jan, 2015	Sep, 2017	Mar, 2016
*/

//Loop Scope

/*
Usando var em um loop:
*/

var i = 5;
for (var i = 0; i < 10; i++) {
    // algumas declarações
}
// Aqui estou eu 10

/*
Usando let em um loop:
*/

let i = 5;
for (let i = 0; i < 10; i++) {
    // algumas declarações
}
// Aqui estou eu 5

/*
No primeiro exemplo, usando var, a variável declarada no loop reapresenta a variável fora do loop.

No segundo exemplo, usando let, a variável declarada no loop não declara novamente a variável fora do loop.

Quando leté usado para declarar a variável i em um loop, a variável i só será visível dentro do loop.
*/

//Escopo da Função

/*
Variáveis ​​declaradas com vare letsão bastante semelhantes quando declaradas dentro de uma função.

Ambos terão escopo de função :
*/

function myFunction() {
    var carName = "Volvo"; // Escopo da Função
}

function myFunction() {
    let carName = "Volvo"; // Escopo da Função
}

//Escopo global

/*
Variáveis ​​declaradas com vare letsão bastante semelhantes quando declaradas fora de um bloco.

Ambos terão escopo global :
*/

var x = 2;       // Global scope

let x = 2;       // Global scope

//Variáveis ​​globais em HTML

/*
Com JavaScript, o escopo global é o ambiente JavaScript.

Em HTML, o escopo global é o objeto da janela.

Variáveis ​​globais definidas com a var palavra - chave pertencem ao objeto janela:
*/

var carName = "Volvo";
// o código aqui pode usar window.carName

/*
Variáveis ​​globais definidas com a letpalavra - chave não pertencem ao objeto janela:
*/

let carName = "Volvo";
// o código aqui não pode usar window.carName

//Redeclarando

/*
Redeclarar uma variável JavaScript com varé permitido em qualquer lugar em um programa:
*/

var x = 2;

// Agora x é 2
 
var x = 3;

// Agora x é 3

/*
Não é permitido redeclarar uma varvariável com let, no mesmo escopo, ou no mesmo bloco:
*/

var x = 2; // Permitido
let x = 3; // Não é Permitido

{
    var x = 4; // Permitido
    let x = 5; // Não é Permitido
}

/*
Não é permitido redeclarar uma let variável com let, no mesmo escopo, ou no mesmo bloco:
*/

let x = 2; // Permitido
let x = 3; // Não é Permitido

{
    let x = 4; // Permitido
    let x = 5; // Não é Permitido
}

/*
Não é permitido redeclarar uma let variável com var, no mesmo escopo, ou no mesmo bloco:
*/

let x = 2; // Permitido
var x = 3; // Não é Permitido

{
    let x = 4; // Permitido
    var x = 5; // Não é Permitido
}

/*
Redeclarar uma variável com let, em outro escopo, ou em outro bloco, é permitido:
*/

let x = 2; // Permitido

{
    let x = 3; // Permitido
}

{
    let x = 4; // Permitido
}

//Elevação(Hoisting)

/*
Variáveis ​​definidas com varsão içadas para o topo e podem ser inicializadas a qualquer momento (se você não sabe o que é içamento, leia nosso Capítulo Içamento ).

Significado: você pode usar a variável antes de ser declarada:
*/

//Isso está certo:
carName = "Volvo";
alert(carName);
var carName;

/*
As variáveis ​​definidas com let são içadas para o topo do bloco, mas não inicializadas.

Significado: O bloco de código está ciente da variável, mas não pode ser usado até que seja declarado.

Usar uma let variável antes de ser declarada resultará em a ReferenceError.

A variável está em uma "zona morta temporal" desde o início do bloco até ser declarada:
*/

//Isso resultará em ReferenceError:

carName = "Volvo";
let carName;