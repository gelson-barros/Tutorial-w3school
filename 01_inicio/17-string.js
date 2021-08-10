//JavaScript Strings

/*
As strings de JavaScript são usadas para armazenar e manipular texto.
*/

//JavaScript Strings

/*
Uma string JavaScript contém zero ou mais caracteres escritos entre aspas.
*/

var x = "John Doe";

/*
Você pode usar aspas simples ou duplas:
*/

var carName1 = "Volvo XC60";  // aspa dupla
var carName2 = 'Volvo XC60';  // aspa simple

/*
Você pode usar aspas dentro de uma string, desde que não correspondam às aspas em torno da string:
*/

var answer1 = "It's alright";
var answer2 = "He is called 'Johnny'";
var answer3 = 'He is called "Johnny"';

//String Length(comprimento da string)

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;

//Escape Character(caracter de fuga)

/*
Como as strings devem ser escritas entre aspas, o JavaScript interpretará mal esta string:
*/

//var x = "We are the so-called "Vikings" from the north.";

/*
A string será cortada em "Nós somos os chamados".

A solução para evitar esse problema é usar o caractere de escape de barra invertida .

O \caractere de escape de barra invertida ( ) transforma caracteres especiais em caracteres de string:
*/

/*
Code	Result	Description
\'	        '	aspa simple
\"	        "	aspa dupla
\\	        \	barra invertida
*/

var x = "We are the so-called \"Vikings\" from the north.";

/*
A sequência \'  insere aspas simples em uma string:
*/

var x = 'It\'s alright.';

//A sequência \\  insere uma barra invertida em uma string:

var x = "O caractere \\ é denominado barra invertida";

/*
Seis outras sequências de escape são válidas em JavaScript:
*/

/*
Code	Result
\b	    Backspace
\f	    Form Feed
\n	    New Line
\r	    Carriage Return
\t	    Horizontal Tabulator
\v	    Vertical Tabulator
*/

/*
Os 6 caracteres de escape acima foram originalmente projetados para controlar máquinas de escrever, teletipos e aparelhos de fax. Eles não fazem nenhum sentido em HTML.
*/

//Quebrando Longas Linhas de Código

/*
Para melhor legibilidade, os programadores geralmente gostam de evitar linhas de código com mais de 80 caracteres.

Se uma instrução JavaScript não couber em uma linha, o melhor lugar para quebrá-la é depois de um operador:
*/

document.getElementById("demo").innerHTML =
"Hello Dolly!";

/*
Você também pode quebrar uma linha de código em uma string de texto com uma única barra invertida:
*/

document.getElementById("demo").innerHTML = "Hello \
Dolly!";

/*
O \método não é o método preferido. Pode não ter suporte universal.
Alguns navegadores não permitem espaços atrás do \caractere.
Uma maneira mais segura de quebrar uma string é usar a adição de string:
*/

document.getElementById("demo").innerHTML = "Hello " +
"Dolly!";

/*
Você não pode quebrar uma linha de código com uma barra invertida:
*/

//document.getElementById("demo").innerHTML = \
//"Hello Dolly!";

//Strings podem ser objetos

/*
Normalmente, as strings de JavaScript são valores primitivos, criados a partir de literais:
*/

var firstName = "John";

/*
Mas as strings também podem ser definidas como objetos com a palavra new- chave :
*/

var firstName = new String("John");

var x = "John";
var y = new String("John");

// typeof x retornará string
// typeof y retornará o objeto

/*
Não crie strings como objetos. Isso diminui a velocidade de execução.
A new palavra-chave complica o código. Isso pode produzir alguns resultados inesperados:

Ao usar o == operador, strings iguais são iguais:
*/

var x = "John";             
var y = new String("John");

// (x == y) é verdadeiro porque x e y têm valores iguais

/*
Ao usar o ===operador, valores iguais podem não ser iguais, porque o === operador espera igualdade tanto no tipo de dados quanto no valor.
*/

var x = "John";             
var y = new String("John");

// (x === y) é falso porque x e y têm tipos diferentes (string e objeto)

/*
Ou ainda pior. Objetos não podem ser comparados:
*/

var x = new String("John");             
var y = new String("John");

// (x == y) é falso porque x e y são objetos

var x = new String("John");             
var y = new String("John");

// (x === y) é falso porque x e y são objetos

/*
Observe a diferença entre (x==y)e (x===y).
Observe também que comparar dois objetos JavaScript sempre retornará false.
*/