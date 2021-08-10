//Matrizes de JavaScript (Array)

/*
Os arrays JavaScript são usados ​​para armazenar vários valores em uma única variável.
*/

var cars = ["Saab", "Volvo", "BMW"];

//O que é uma matriz?

/*
Uma matriz é uma variável especial, que pode conter mais de um valor por vez.

Se você tiver uma lista de itens (uma lista de nomes de carros, por exemplo), armazenar os carros em variáveis ​​únicas pode ser assim:
*/

var car1 = "Saab";
var car2 = "Volvo";
var car3 = "BMW";

/*
No entanto, e se você quiser percorrer os carros e encontrar um específico? E se você não tivesse 3 carros, mas 300?

A solução é um array!

Uma matriz pode conter muitos valores sob um único nome e você pode acessar os valores referindo-se a um número de índice.
*/

//Criando um Array

/*
Usar um literal de array é a maneira mais fácil de criar um Array JavaScript.

Sintaxe:

var array_name = [item1, item2, ...]; 
*/

var cars = ["Saab", "Volvo", "BMW"];

/*
Espaços e quebras de linha não são importantes. Uma declaração pode abranger várias linhas:
*/

var cars = [
  "Saab",
  "Volvo",
  "BMW"
];

//Usando a palavra-chave JavaScript new

/*
O exemplo a seguir também cria um Array e atribui valores a ele:
*/

var cars = new Array("Saab", "Volvo", "BMW");


/*
Os dois exemplos acima fazem exatamente o mesmo. Não há necessidade de usar new Array().
Para simplicidade, legibilidade e velocidade de execução, use o primeiro (o método literal de array).
*/

//Acesse os elementos de um array

/*
Você acessa um elemento da matriz referindo-se ao número do índice .

Esta instrução acessa o valor do primeiro elemento em cars:
*/

var name = cars[0];

/*
Nota: os índices de matriz começam com 0.

[0] é o primeiro elemento. [1] é o segundo elemento.
*/

//Mudando um Elemento Array

/*
Esta declaração altera o valor do primeiro elemento em cars:
*/

cars[0] = "Opel";

var cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
document.getElementById("demo").innerHTML = cars[0];

//Acesse o Array Completo

/*
Com JavaScript, a matriz completa pode ser acessada referindo-se ao nome da matriz:
*/

var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;

//Matrizes são objetos

/*
Arrays são um tipo especial de objetos. O typeofoperador em JavaScript retorna "objeto" para matrizes.

Porém, os arrays JavaScript são melhor descritos como arrays.

Os arrays usam números para acessar seus "elementos". Neste exemplo, person[0] retorna John:
*/

//array
var person = ["John", "Doe", 46];

/*
Os objetos usam nomes para acessar seus "membros". Neste exemplo, person.firstName retorna John:
*/

//Objeto:
var person = { firstName: "John", lastName: "Doe", age: 46 };

//Elementos da matriz podem ser objetos

/*
Variáveis ​​JavaScript podem ser objetos. Matrizes são tipos especiais de objetos.

Por causa disso, você pode ter variáveis ​​de diferentes tipos no mesmo Array.

Você pode ter objetos em um Array. Você pode ter funções em um Array. Você pode ter matrizes em uma matriz:
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;
*/

//Propriedades e métodos da matriz

/*
A verdadeira força dos arrays JavaScript são as propriedades e métodos integrados do array:
*/

var x = cars.length;   // A propriedade length retorna o número de elementos
var y = cars.sort();   // O método sort () classifica arrays

//O comprimento(length) da propriedade

/*
A lengthpropriedade de uma matriz retorna o comprimento de uma matriz (o número de elementos da matriz).
*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length;   // the length of fruits is 4

/*
A lengthpropriedade é sempre um a mais do que o índice de matriz mais alto.
*/

//Acessando o primeiro elemento do array

fruits = ["Banana", "Orange", "Apple", "Mango"];
var first = fruits[0];

//Acessando o Último Elemento de Matriz

fruits = ["Banana", "Orange", "Apple", "Mango"];
var last = fruits[fruits.length - 1];

//Looping Array Elements

/*
A maneira mais segura de fazer um loop em uma matriz é usando um forloop:
*/

var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

/*
Você também pode usar a Array.forEach()função:
*/

var fruits, text;
fruits = ["Banana", "Orange", "Apple", "Mango"];

text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
    text += "<li>" + value + "</li>";
}

//Adicionando Elementos de Matriz

/*
A maneira mais fácil de adicionar um novo elemento a uma matriz é usando o push()método:
*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon");    // adds a new element (Lemon) to fruits

/*
O novo elemento também pode ser adicionado a uma matriz usando a lengthpropriedade:
*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Lemon";    // adds a new element (Lemon) to fruits

/*
AVISO !
Adicionar elementos com altos índices pode criar "buracos" indefinidos em uma matriz:
*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[6] = "Lemon";    // adds a new element (Lemon) to fruits

//Matrizes Associativas

/*
Muitas linguagens de programação oferecem suporte a matrizes com índices nomeados.

As matrizes com índices nomeados são chamadas de matrizes associativas (ou hashes).

JavaScript não oferece suporte a matrizes com índices nomeados.

Em JavaScript, os arrays sempre usam índices numerados .  
*/

var person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
var x = person.length;     // person.length will return 3
var y = person[0];         // person[0] will return "John"

/*
AVISO !!
Se você usar índices nomeados, o JavaScript redefinirá a matriz para um objeto padrão.
Depois disso, alguns métodos e propriedades de array produzirão resultados incorretos .
*/

var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
var x = person.length;     // person.length will return 0
var y = person[0];         // person[0] will return undefined

//A diferença entre matrizes e objetos

/*
Em JavaScript, os arrays usam índices numerados .  

Em JavaScript, os objetos usam índices nomeados .
*/

/*
Arrays são um tipo especial de objetos, com índices numerados.
*/

/*
NOTA!!!!
Quando usar matrizes. Quando usar objetos.

JavaScript não oferece suporte a matrizes associativas.
Você deve usar objetos quando quiser que os nomes dos elementos sejam strings (texto) .
Você deve usar matrizes quando quiser que os nomes dos elementos sejam números .
*/

//Evite new Array ()

/*
Não há necessidade de usar o construtor de array integrado do JavaScript newArray ().

Use em seu []lugar.

Essas duas instruções diferentes criam uma nova matriz vazia chamada pontos:
*/

var points = new Array();     // Bad
var points = [];              // Good 

/*
Essas duas instruções diferentes criam uma nova matriz contendo 6 números:
*/

var points = new Array(40, 100, 1, 5, 25, 10); // Bad
var points = [40, 100, 1, 5, 25, 10];          // Good

/*
A newpalavra-chave apenas complica o código. Também pode produzir alguns resultados inesperados:
*/

var points = new Array(40, 100);  // Creates an array with two elements (40 and 100)

/*
E se eu remover um dos elementos?
*/

var points = new Array(40);  // Creates an array with 40 undefined elements !!!!!

//Como reconhecer uma matriz

/*
Uma pergunta comum é: como posso saber se uma variável é uma matriz?

O problema é que o operador JavaScript typeof retorna " object":
*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];

typeof fruits;    // returns object


/*
O operador typeof retorna objeto porque uma matriz JavaScript é um objeto.

Solução 1:
Para resolver este problema, o ECMAScript 5 define um novo método Array.isArray():
*/

Array.isArray(fruits);   // returns true

/*
O problema com esta solução é que ECMAScript 5 não é compatível com navegadores mais antigos .
*/


/*
Solução 2:
Para resolver este problema, você pode criar sua própria isArray()função:
*/

function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
}

/*
A função acima sempre retorna verdadeiro se o argumento for uma matriz.

Ou mais precisamente: retorna verdadeiro se o protótipo do objeto contiver a palavra "Array".

Solução 3:
O instanceofoperador retorna verdadeiro se um objeto é criado por um determinado construtor:
*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits instanceof Array;   // returns true