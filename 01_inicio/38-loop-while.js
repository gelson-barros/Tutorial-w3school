//JavaScript While Loop

/*
Os loops podem executar um bloco de código, desde que uma condição especificada seja verdadeira.

The While Loop
O whileloop percorre um bloco de código, desde que uma condição especificada seja verdadeira.

Sintaxe
while (condition) {
  // code block to be executed
}
Exemplo
No exemplo a seguir, o código no loop será executado, indefinidamente, desde que uma variável (i) seja menor que 10:

Exemplo
while (i < 10) {
  text += "The number is " + i;
  i++;
}
Se você esquecer de aumentar a variável usada na condição, o loop nunca terminará. Isso irá travar seu navegador.

O Loop Do While
O do whileloop é uma variante do loop while. Este loop executará o bloco de código uma vez, antes de verificar se a condição é verdadeira e, em seguida, repetirá o loop enquanto a condição for verdadeira.

Sintaxe
do {
  // code block to be executed
}
while (condition);
Exemplo
O exemplo abaixo usa um do whileloop. O loop sempre será executado pelo menos uma vez, mesmo se a condição for falsa, porque o bloco de código é executado antes que a condição seja testada:

Exemplo
do {
  text += "The number is " + i;
  i++;
}
while (i < 10);
Não se esqueça de aumentar a variável usada na condição, caso contrário o loop nunca terminará!

Comparando durante e enquanto
Se você leu o capítulo anterior sobre o loop for, descobrirá que um loop while é muito parecido com um loop for, com a instrução 1 e a instrução 3 omitidas.

O loop neste exemplo usa um forloop para coletar os nomes dos carros da matriz cars:

Exemplo
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

for (;cars[i];) {
  text += cars[i];
  i++;
}
O loop neste exemplo usa um whileloop para coletar os nomes dos carros da matriz cars:

Exemplo
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

while (cars[i]) {
  text += cars[i];
  i++;
}
*/