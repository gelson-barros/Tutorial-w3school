//Métodos de Array JavaScript

//Convertendo Arrays em Strings

/*
O método JavaScript toString()converte uma matriz em uma string de valores de matriz (separados por vírgula).
*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();//Banana,Orange,Apple,Mango

/*
O join()método também une todos os elementos do array em uma string.

Ele se comporta exatamente como toString(), mas, além disso, você pode especificar o separador:
*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");//Banana * Orange * Apple * Mango


//Estalando e empurrando(Popping and Pushing)

/*
Quando você trabalha com matrizes, é fácil remover elementos e adicionar novos elementos.

Isso é o que é estalar e empurrar:

Popping itens fora de uma matriz, ou empurrando itens em um array.
*/

//Estourando(Popping)

/*
O pop()método remove o último elemento de uma matriz:
*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();              // Removes the last element ("Mango") from fruits

/*
O pop()método retorna o valor que foi "retirado":
*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.pop();      // the value of x is "Mango"

//Empurrando(Pushing)

/*
O push()método adiciona um novo elemento a uma matriz (no final):
*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");       //  Adds a new element ("Kiwi") to fruits

/*
O push()método retorna o novo comprimento da matriz:
*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.push("Kiwi");   //  the value of x is 5

//Elementos de Mudança

/*
Deslocar é equivalente a estalar, trabalhando no primeiro elemento em vez do último.

O shift()método remove o primeiro elemento da matriz e "muda" todos os outros elementos para um índice inferior.
*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();            // Removes the first element "Banana" from fruits

/*
O shift()método retorna a string que foi "deslocada":
*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.shift();    // the value of x is "Banana"

/*
O unshift()método adiciona um novo elemento a uma matriz (no início) e "remove" os elementos mais antigos:
*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits

/*
O unshift()método retorna o novo comprimento do array.
*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // Returns 5

//Elementos de Mudança

/*
Os elementos da matriz são acessados ​​usando seu número de índice :

Os índices da matriz começam com 0. [0] é o primeiro elemento da matriz, [1] é o segundo, [2] é o terceiro ...
*/


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";        // Changes the first element of fruits to "Kiwi"

//Excluindo Elementos

/*
Como as matrizes JavaScript são objetos, os elementos podem ser excluídos usando o operador JavaScript delete:
*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];           // Changes the first element in fruits to undefined

/*
O uso de delete pode deixar lacunas indefinidas na matriz. Em vez disso, use pop () ou shift ().
*/

//Splicing an Array

/*
O splice()método pode ser usado para adicionar novos itens a uma matriz:
*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

/*
O primeiro parâmetro (2) define a posição onde novos elementos devem ser adicionados (emendados).

O segundo parâmetro (0) define quantos elementos devem ser removidos .

O resto dos parâmetros ("Limão", "Kiwi") definem os novos elementos a serem adicionados .

O splice()método retorna uma matriz com os itens excluídos:
*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");

//Usando splice () para remover elementos

/*
Com a configuração inteligente de parâmetros, você pode usar splice()para remover elementos sem deixar "buracos" na matriz:
*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);        // Removes the first element of fruits

/*
O primeiro parâmetro (0) define a posição onde novos elementos devem ser adicionados (emendados).

O segundo parâmetro (1) define quantos elementos devem ser removidos .

O resto dos parâmetros são omitidos. Nenhum novo elemento será adicionado.
*/

//Mesclando (concatenando) matrizes

/*
O concat()método cria uma nova matriz mesclando (concatenando) matrizes existentes:
*/

//Exemplo (mesclando duas matrizes)
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);   // Concatenates (joins) myGirls and myBoys

/*
O concat()método não altera as matrizes existentes. Ele sempre retorna uma nova matriz.
O concat()método pode aceitar qualquer número de argumentos de matriz:
*/

//Exemplo (mesclando três matrizes)
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);   // Concatenates arr1 with arr2 and arr3

/*
O concat()método também pode receber strings como argumentos:
*/

//Exemplo (mesclando uma matriz com valores)
var arr1 = ["Emil", "Tobias", "Linus"];
var myChildren = arr1.concat("Peter"); 

//Fatiando uma matriz(Slicing an Array)

/*
O slice()método divide uma parte de uma matriz em uma nova matriz.

Este exemplo corta parte de uma matriz a partir do elemento 1 da matriz ("laranja"):
*/

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1);

/*
O slice()método cria uma nova matriz. Ele não remove nenhum elemento da matriz de origem.
Este exemplo corta parte de uma matriz a partir do elemento 3 da matriz ("Apple"):
*/

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(3);

/*
O slice()método pode receber dois argumentos como slice(1, 3).

O método então seleciona elementos do argumento inicial e até (mas não incluindo) o argumento final.
*/

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);

/*
Se o argumento final for omitido, como nos primeiros exemplos, o slice() método corta o resto do array.
*/

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(2);

//toString automático ()

/*
JavaScript converte automaticamente uma matriz em uma string separada por vírgulas quando um valor primitivo é esperado.

Este é sempre o caso quando você tenta gerar um array.

Esses dois exemplos produzirão o mesmo resultado:
*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

/*
OBS:Todos os objetos JavaScript têm um método toString ().
*/


//Encontrando valores máximos e mínimos em uma matriz

/*
Não há funções integradas para localizar o valor mais alto ou mais baixo em uma matriz JavaScript.
*/

//Classificando matrizes

/*
As matrizes de classificação são abordadas no próximo capítulo deste tutorial.
*/