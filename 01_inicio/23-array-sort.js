//Matrizes de classificação de JavaScript(JavaScript Sorting Arrays)

//Classificando uma Matriz

/*
O sort()método classifica uma matriz em ordem alfabética:
*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();        // Sorts the elements of fruits

//Invertendo um Array

/*
O reverse()método inverte os elementos em uma matriz.

Você pode usá-lo para classificar uma matriz em ordem decrescente:
*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();        // First sort the elements of fruits
fruits.reverse();     // Then reverse the order of the elements

//Classificação Numérica

/*
Por padrão, a sort()função classifica os valores como strings .

Isso funciona bem para strings ("Apple" vem antes de "Banana").

No entanto, se os números forem classificados como strings, "25" é maior que "100", porque "2" é maior que "1".

Por causa disso, o sort()método produzirá resultados incorretos ao classificar os números.

Você pode corrigir isso fornecendo uma função de comparação :
*/

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});

/*
Use o mesmo truque para classificar uma matriz em ordem decrescente:
*/

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});

//A Função Comparar

/*
O objetivo da função de comparação é definir uma ordem de classificação alternativa.

A função de comparação deve retornar um valor negativo, zero ou positivo, dependendo dos argumentos:
*/

function(a, b){return a - b}

/*
Quando a sort()função compara dois valores, ela os envia para a função de comparação e os classifica de acordo com o valor retornado (negativo, zero, positivo).

Se o resultado for negativo aé classificado antes b.

Se o resultado for positivo bé classificado antes a.

Se o resultado for 0, nenhuma alteração será feita na ordem de classificação dos dois valores.

Exemplo:

A função de comparação compara todos os valores na matriz, dois valores por vez (a, b).

Ao comparar 40 e 100, o sort()método chama a função de comparação (40, 100).

A função calcula 40 - 100 (a - b)e, como o resultado é negativo (-60), a função de classificação classificará 40 como um valor inferior a 100.

Você pode usar este snippet de código para experimentar a classificação numérica e alfabética:
*/

/*
<button onclick="myFunction1()">Sort Alphabetically</button>
<button onclick="myFunction2()">Sort Numerically</button>

<p id="demo"></p>

<script>
var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

function myFunction1() {
  points.sort();
  document.getElementById("demo").innerHTML = points;
}

function myFunction2() {
  points.sort(function(a, b){return a - b});
  document.getElementById("demo").innerHTML = points;
}
</script>
*/

//Classificando uma matriz em ordem aleatória

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return 0.5 - Math.random()});

//O Método Fisher Yates

/*
O exemplo acima, array .sort (), não é preciso, ele irá favorecer alguns números em detrimento de outros.

O método correto mais popular é chamado de embaralhamento de Fisher Yates e foi introduzido na ciência de dados já em 1938!

Em JavaScript, o método pode ser traduzido para este:
*/

var points = [40, 100, 1, 5, 25, 10];

for (i = points.length -1; i > 0; i--) {
  j = Math.floor(Math.random() * i)
  k = points[i]
  points[i] = points[j]
  points[j] = k
}

//Encontre o valor de array mais alto (ou mais baixo)

/*
Não há funções integradas para localizar o valor máximo ou mínimo em uma matriz.

No entanto, depois de classificar uma matriz, você pode usar o índice para obter os valores mais altos e mais baixos.
Ordenação ascendente:
*/

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value

/*
Classificando em ordem decrescente:
*/

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
// now points[0] contains the highest value
// and points[points.length-1] contains the lowest value

/*
Classificar uma matriz inteira é um método muito ineficiente se você deseja apenas encontrar o valor mais alto (ou mais baixo).
*/

//Usando Math.max () em um Array

/*
Você pode usar Math.max.applypara encontrar o número mais alto em uma matriz:
*/

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

/*
Math.max.apply(null, [1, 2, 3])é equivalente a Math.max(1, 2, 3).
*/

//Usando Math.min () em um Array

/*
Você pode usar Math.min.applypara encontrar o menor número em uma matriz:
*/

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

/*
Math.min.apply(null, [1, 2, 3])é equivalente a Math.min(1, 2, 3).
*/

//Meus métodos mínimo / máximo de JavaScript

/*
A solução mais rápida é usar um método "feito em casa".

Esta função percorre uma matriz comparando cada valor com o maior valor encontrado:
*/

//Exemplo (Find Max)
function myArrayMax(arr) {
  var len = arr.length;
  var max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

/*
Esta função percorre uma matriz comparando cada valor com o menor valor encontrado:
*/

//Exemplo (Encontrar Min)

function myArrayMin(arr) {
  var len = arr.length;
  var min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}

//Classificando Arrays de Objetos

/*
Matrizes de JavaScript geralmente contêm objetos:
*/

var cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

/*
Mesmo que os objetos tenham propriedades de diferentes tipos de dados, o sort()método pode ser usado para classificar o array.

A solução é escrever uma função de comparação para comparar os valores da propriedade:
*/

cars.sort(function(a, b){return a.year - b.year});

/*
Comparar propriedades de string é um pouco mais complexo:
*/

cars.sort(function(a, b){
  var x = a.type.toLowerCase();
  var y = b.type.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});