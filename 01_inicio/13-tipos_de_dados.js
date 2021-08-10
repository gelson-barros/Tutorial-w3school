//Tipos de dados JavaScript

/*
Variáveis ​​JavaScript podem conter muitos tipos de dados : números, strings, objetos e muito mais:
*/

var length = 16;                               // Number
var lastName = "Johnson";                      // String
var x = {firstName:"John", lastName:"Doe"};    // Object

//O conceito de tipos de dados

/*
Na programação, os tipos de dados são um conceito importante.

Para poder operar em variáveis, é importante saber algo sobre o tipo.

Sem tipos de dados, um computador não pode resolver isso com segurança:
*/

var x = 16 + "Volvo";

/*
Faz algum sentido adicionar "Volvo" a dezesseis? Isso produzirá um erro ou um resultado?

JavaScript tratará o exemplo acima como:
*/

var x = "16" + "Volvo";

/*
Ao adicionar um número e uma string, o JavaScript tratará o número como uma string.
*/

var x = 16 + "Volvo";//16Volvo

var x = "Volvo" + 16;//Volvo16

/*
JavaScript avalia expressões da esquerda para a direita. Sequências diferentes podem produzir resultados diferentes:
*/

var x = 16 + 4 + "Volvo";//20Volvo

var x = "Volvo" + 16 + 4;//Volvo164

/*
No primeiro exemplo, JavaScript trata 16 e 4 como números, até atingir "Volvo".

No segundo exemplo, como o primeiro operando é uma string, todos os operandos são tratados como strings.
*/

//Tipos de JavaScript são dinâmicos

/*
JavaScript possui tipos dinâmicos. Isso significa que a mesma variável pode ser usada para conter diferentes tipos de dados:
*/

var x;           // Agora x é undefined
x = 5;           // Agora x é um Number
x = "John";      // Agora x é uma String

//JavaScript Strings

/*
Uma string (ou uma string de texto) é uma série de caracteres como "John Doe".

As string são escritas com aspas. Você pode usar aspas simples ou duplas:
*/

var carName1 = "Volvo XC60";   // Usando aspas duplas
var carName2 = 'Volvo XC60';   // Usando aspas simples

/*
Você pode usar aspas dentro de uma string, desde que não correspondam às aspas em torno da string:
*/

var answer1 = "It's alright"; // Aspas simples entre aspas duplas
var answer2 = "He is called 'Johnny'";// Aspas simples entre aspas duplas
var answer3 = 'He is called "Johnny"';// Aspas duplas dentro de aspas simples

//Números de JavaScript

/*
JavaScript possui apenas um tipo de número.

Os números podem ser escritos com ou sem decimais:
*/

var x1 = 34.00;     // Escrito com decimais
var x2 = 34;        // Escrito sem decimais

/*
Números muito grandes ou muito pequenos podem ser escritos com notação científica (exponencial):
*/

var y = 123e5;      // 12300000
var z = 123e-5;     // 0.00123

//Booleanos JavaScript

/*
Os booleanos podem ter apenas dois valores: true ou false.
*/

var x = 5;
var y = 5;
var z = 6;
(x == y)       // retorna true
(x == z)       // retorna false

/*
Os booleanos costumam ser usados ​​em testes condicionais.
*/

//Matrizes de JavaScript

/*
As matrizes de JavaScript são escritas com colchetes.

Os itens da matriz são separados por vírgulas.

O código a seguir declara (cria) uma matriz chamada cars, contendo três itens (nomes de carros):
*/

var cars = ["Saab", "Volvo", "BMW"];

/*
Os índices de matriz são baseados em zero, o que significa que o primeiro item é [0], o segundo é [1] e assim por diante.
*/

//Objetos JavaScript

/*
Os objetos JavaScript são escritos com chaves {}.

As propriedades do objeto são escritas como pares nome: valor, separados por vírgulas.
*/

var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

/*
O objeto (person) no exemplo acima tem 4 propriedades: firstName, lastName, age e eyeColor.
*/

//O operador typeof 

/*
Você pode usar o operador typeof do JavaScript para encontrar o tipo de uma variável JavaScript.

O typeof operador retorna o tipo de uma variável ou expressão:
*/

typeof ""             // retorna "string"
typeof "John"         // retorna "string"
typeof "John Doe"     // retorna "string"

typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"

//Undefined

/*
Em JavaScript, uma variável sem valor possui o valor undefined. O tipo também é undefined.
*/

var car;    // Valor é undefined, tipo é undefined

/*
Qualquer variável pode ser esvaziada, definindo o valor para undefined. O tipo também será undefined.
*/

car = undefined;    // Valor é undefined, tipo é  undefined

//Valores Empty(Valores Vazios)

/*
Um valor vazio não tem nada a ver com undefined.

Uma string vazia tem um valor legal e um tipo.
*/

var car = "";    // O valor é "", o typeof é "string"

//Null(nulo)

/*
Em JavaScript null é "nada". Deve ser algo que não existe.

Infelizmente, em JavaScript, o tipo de dados de null é um objeto.
*/

/*
OBS:Você pode considerá-lo um bug em JavaScript que typeof null é um objeto. Deve ser null.
Você pode esvaziar um objeto configurando-o para null:
*/

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null;    // Agora o valor é null, mas o tipo ainda é um object

/*
Você também pode esvaziar um objeto configurando-o para undefined:
*/

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = undefined;   // Agora, tanto o valor quanto o tipo são undefined

//Diferença entre undefined e null

typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true

//Dados primitivos

/*
Um valor de dados primitivo é um único valor de dados simples sem propriedades e métodos adicionais.

O typeof operador pode retornar um destes tipos primitivos:
    -string
    -number
    -boolean
    -undefined
*/

typeof "John"     // retorna "string"
typeof 3.14       // retorna "number"
typeof true       // retorna "boolean"
typeof false      // retorna "boolean"
typeof x          // retorna "undefined" (se x não tem valor)

//Dados Complexos

/*
O typeof operador pode retornar um de dois tipos complexos:

    .function
    .object
O typeof operador retorna "objeto" para objetos, matrizes e nulo.

O typeofoperador não retorna "objeto" para funções.
*/

typeof {name:'John', age:34} // retorna "object"
typeof [1,2,3,4]             // retorna "object" (não "array", veja a nota abaixo)
typeof null                  // retorna "object"
typeof function myFunc(){}   // retorna "function"

/*
NOTA:O typeof operador retorna " object" para matrizes porque em JavaScript as matrizes são objetos.
*/