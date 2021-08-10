//JavaScript para em

/*
O For In Loop
A for ininstrução JavaScript percorre as propriedades de um objeto:

Sintaxe
for (key in object) {
  // code block to be executed
}
Exemplo
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}
Exemplo Explicado
A no itera loop sobre uma pessoa objecto
Cada iteração retorna uma chave (x)
A chave é usada para acessar o valor da chave
O valor da chave é pessoa [x]
Para In Over Arrays
A for ininstrução JavaScript também pode repetir as propriedades de um Array:

Sintaxe
for (variable in array) {
  code
}
Exemplo
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}
Não use for em sobre um Array se a ordem do índice for importante.

A ordem do índice depende da implementação e os valores do array não podem ser acessados ​​na ordem que você espera.

É preferível utilizar um para loop, um para de malha, ou Array.forEach () quando o fim é importante.


Array.forEach ()
O forEach()método chama uma função (uma função de retorno de chamada) uma vez para cada elemento da matriz.

Exemplo
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value;
}
Observe que a função leva 3 argumentos:

O valor do item
O índice do item
A própria matriz
O exemplo acima usa apenas o parâmetro value. Ele pode ser reescrito para:

Exemplo
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value;
}
*/