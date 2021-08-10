//Métodos de Iteração de Array JavaScript

/*
Os métodos de iteração de array operam em cada item de array.
*/

//Array.forEach ()

/*
O forEach()método chama uma função (uma função de retorno de chamada) uma vez para cada elemento da matriz.
*/

var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
    txt = txt + value + "<br>";
}

/*
Observe que a função leva 3 argumentos:

    .O valor do item
    .O índice do item
    .A própria matriz
O exemplo acima usa apenas o parâmetro value. O exemplo pode ser reescrito para:
*/

var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value) {
    txt = txt + value + "<br>";
}


/*
Array.forEach() é compatível com todos os navegadores, exceto Internet Explorer 8 ou anterior:
*/

//Array.map ()

/*
O map()método cria uma nova matriz executando uma função em cada elemento da matriz.

O map()método não executa a função para elementos da matriz sem valores.

O map()método não altera a matriz original.

Este exemplo multiplica cada valor da matriz por 2:
*/

var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
    return value * 2;
}


/*
Observe que a função leva 3 argumentos:

    .O valor do item
    .O índice do item
    .A própria matriz
Quando uma função de retorno de chamada usa apenas o parâmetro de valor, os parâmetros de índice e matriz podem ser omitidos:

*/

var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value) {
    return value * 2;
}

/*
Array.map() é compatível com todos os navegadores, exceto Internet Explorer 8 ou anterior.
*/

//Array.filter ()

/*
O filter()método cria uma nova matriz com elementos de matriz que passam no teste.

Este exemplo cria uma nova matriz de elementos com um valor maior que 18:
*/

var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}

/*
Observe que a função leva 3 argumentos:

    .O valor do item
    .O índice do item
    .A própria matriz
No exemplo acima, a função de retorno de chamada não usa os parâmetros index e array, portanto, eles podem ser omitidos:
*/

var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value) {
    return value > 18;
}

/*
Array.filter() é compatível com todos os navegadores, exceto Internet Explorer 8 ou anterior.
*/

//Array.reduce ()

/*
O reduce()método executa uma função em cada elemento do array para produzir (reduzi-lo a) um único valor.

O reduce()método funciona da esquerda para a direita na matriz. Veja também reduceRight().
*/

/*
O reduce()método não reduz a matriz original.
Este exemplo encontra a soma de todos os números em uma matriz:
*/

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value, index, array) {
    return total + value;
}

/*
Observe que a função leva 4 argumentos:

    .O total (o valor inicial / valor retornado anteriormente)
    .O valor do item
    .O índice do item
    .A própria matriz
O exemplo acima não usa os parâmetros de índice e array. Pode ser reescrito para:
*/

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value) {
    return total + value;
}

/*
O reduce()método pode aceitar um valor inicial:
*/

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction, 100);

function myFunction(total, value) {
    return total + value;
}

/*
Array.reduce() é compatível com todos os navegadores, exceto Internet Explorer 8 ou anterior.
*/

//Array.reduceRight ()

/*
O reduceRight()método executa uma função em cada elemento do array para produzir (reduzi-lo a) um único valor.

As reduceRight()obras da direita para a esquerda na matriz. Veja também reduce().
O reduceRight()método não reduz a matriz original.

Este exemplo encontra a soma de todos os números em uma matriz:
*/

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduceRight(myFunction);

function myFunction(total, value, index, array) {
    return total + value;
}

/*
Observe que a função leva 4 argumentos:

    .O total (o valor inicial / valor retornado anteriormente)
    .O valor do item
    .O índice do item
    .A própria matriz
O exemplo acima não usa os parâmetros de índice e array. Pode ser reescrito para:
*/

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduceRight(myFunction);

function myFunction(total, value) {
    return total + value;
}

/*
Array.reduceRight() é compatível com todos os navegadores, exceto Internet Explorer 8 ou anterior.
*/

//Array.every ()

/*
O every()método verifica se todos os valores da matriz passam no teste.

Este exemplo verifica se todos os valores da matriz são maiores que 18:
*/

var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}

/*
Observe que a função leva 3 argumentos:

    .O valor do item
    .O índice do item
    .A própria matriz
Quando uma função de retorno de chamada usa apenas o primeiro parâmetro (valor), os outros parâmetros podem ser omitidos:
*/

var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

function myFunction(value) {
    return value > 18;
}

/*
Array.every() é compatível com todos os navegadores, exceto Internet Explorer 8 ou anterior.
*/

//Array.some ()

/*
O some()método verifica se alguns valores do array passam no teste.

Este exemplo verifica se alguns valores da matriz são maiores que 18:
*/

var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}

/*
Observe que a função leva 3 argumentos:

    .O valor do item
    .O índice do item
    .A própria matriz
Array.some() é compatível com todos os navegadores, exceto Internet Explorer 8 ou anterior.
*/

//Array.indexOf ()
/*
O indexOf()método pesquisa uma matriz para um valor de elemento e retorna sua posição.

Observação: o primeiro item tem a posição 0, o segundo item tem a posição 1 e assim por diante.
*/

//Pesquise uma matriz para o item "Apple":
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");

/*
Array.indexOf() é compatível com todos os navegadores, exceto Internet Explorer 8 ou anterior.
*/

/*
Sintaxe
array.indexOf(item, start)
item	Obrigatório. O item a ser pesquisado
start	Opcional. Onde começar a pesquisa. Os valores negativos começarão na posição dada, contando do final e pesquisando até o final.

Array.indexOf() retorna -1 se o item não for encontrado.

Se o item estiver presente mais de uma vez, ele retorna a posição da primeira ocorrência.
*/

//Array.lastIndexOf ()

/*
Array.lastIndexOf()é o mesmo que Array.indexOf(), mas retorna a posição da última ocorrência do elemento especificado.
*/

//Pesquise uma matriz para o item "Apple":
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.lastIndexOf("Apple");

/*
Array.lastIndexOf() é compatível com todos os navegadores, exceto Internet Explorer 8 ou anterior.
*/

/*
Sintaxe
array.lastIndexOf(item, start)
item	Obrigatório. O item a ser pesquisado
start	Opcional. Onde começar a pesquisa. Os valores negativos começarão na posição dada, contando a partir do final e pesquisando até o início
*/

//Array.find ()

/*
O find()método retorna o valor do primeiro elemento da matriz que passa em uma função de teste.

Este exemplo encontra (retorna o valor de) o primeiro elemento maior que 18:
*/

var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}

/*
Observe que a função leva 3 argumentos:

    .O valor do item
    .O índice do item
    .A própria matriz
Array.find()não é compatível com navegadores mais antigos. As primeiras versões do navegador com suporte total estão listadas abaixo.
*/

//Array.findIndex ()

/*
O findIndex()método retorna o índice do primeiro elemento da matriz que passa em uma função de teste.

Este exemplo encontra o índice do primeiro elemento maior que 18:
*/

var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}

/*
Observe que a função leva 3 argumentos:

    .O valor do item
    .O índice do item
    .A própria matriz
Array.findIndex()não é compatível com navegadores mais antigos. As primeiras versões do navegador com suporte total estão listadas abaixo.


*/