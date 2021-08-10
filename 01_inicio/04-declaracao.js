//Declarações de JavaScript

var x, y, z;    // Demostração 1
x = 5;          // Demostração 2
y = 6;          // Demostração 3
z = x + y;      // Demostração 4

/*
Programas JavaScript
Um programa de computador é uma lista de "instruções" a serem "executadas" por um computador.

Em uma linguagem de programação, essas instruções de programação são chamadas de instruções .

Um programa JavaScript é uma lista de instruções de programação .
*/

/*
As instruções JavaScript são compostas de:

Valores, operadores, expressões, palavras-chave e comentários.

Esta declaração instrui o navegador a escrever "Hello Dolly". dentro de um elemento HTML com id = "demo":
*/

document.getElementById("demo").innerHTML = "Hello Dolly.";

/*
Ponto e vírgula;
Os pontos-e-vírgulas separam as instruções JavaScript.

Adicione um ponto e vírgula no final de cada instrução executável:
*/

var a, b, c;     // Declare 3 variables
a = 5;           // Assign the value 5 to a
b = 6;           // Assign the value 6 to b
c = a + b;       // Assign the sum of a and b to c

/*
Quando separados por ponto e vírgula, várias instruções em uma linha são permitidas:
*/
a = 5; b = 6; c = a + b;

/*
JavaScript White Space

JavaScript ignora vários espaços. Você pode adicionar um espaço em branco ao seu script para torná-lo mais legível.

As seguintes linhas são equivalentes:

*/

var person = "Hege";
var person="Hege";

/*
Uma boa prática é colocar espaços ao redor dos operadores (= + - * /):
*/

var x = y + z;

/*
Comprimento de linha JavaScript e quebras de linha
Para melhor legibilidade, os programadores geralmente gostam de evitar linhas de código com mais de 80 caracteres.

Se uma instrução JavaScript não couber em uma linha, o melhor lugar para quebrá-la é depois de um operador:
*/

document.getElementById("demo").innerHTML =
"Hello Dolly!";

/*
Blocos de código JavaScript
As instruções JavaScript podem ser agrupadas em blocos de código, entre chaves {...}.

O objetivo dos blocos de código é definir instruções a serem executadas juntas.

Um lugar onde você encontrará instruções agrupadas em blocos é nas funções JavaScript:
*/

function myFunction() {
    document.getElementById("demo1").innerHTML = "Hello Dolly!";
    document.getElementById("demo2").innerHTML = "How are you?";
}

/*
Palavras-chave JavaScript
As instruções JavaScript geralmente começam com uma palavra - chave para identificar a ação JavaScript a ser executada.

Visite nossa referência de Palavras reservadas para ver uma lista completa de palavras-chave JavaScript .

Aqui está uma lista de algumas das palavras-chave que você aprenderá neste tutorial:
*/

/*

Palavra-chave	Descrição
-break	Termina um switch ou um loop
-continue	Pula de um loop e começa no topo
-debugger	Para a execução de JavaScript e chama (se disponível) a função de depuração
-do ... while	Executa um bloco de instruções e repete o bloco, enquanto uma condição for verdadeira
-for	Marca um bloco de instruções a serem executadas, desde que uma condição seja verdadeira
-function	Declara uma função
-if ... else	Marca um bloco de instruções a serem executadas, dependendo de uma condição
-return	Sai de uma função
-switch	Marca um bloco de instruções a serem executadas, dependendo dos casos diferentes
-try ... catch	Implementa o tratamento de erros em um bloco de declarações
-var	Declara uma variável

*/