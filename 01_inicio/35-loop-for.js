//JavaScript For Loop

/*
Os loops podem executar um bloco de código várias vezes.

Loops de JavaScript
Os loops são úteis, se você deseja executar o mesmo código repetidamente, cada vez com um valor diferente.

Freqüentemente, esse é o caso ao trabalhar com matrizes:

Em vez de escrever:
text += cars[0] + "<br>";
text += cars[1] + "<br>";
text += cars[2] + "<br>";
text += cars[3] + "<br>";
text += cars[4] + "<br>";
text += cars[5] + "<br>";
Você pode escrever:
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
Diferentes tipos de loops
JavaScript oferece suporte a diferentes tipos de loops:

for - percorre um bloco de código várias vezes
for/in - percorre as propriedades de um objeto
for/of - percorre os valores de um objeto iterável
while - percorre um bloco de código enquanto uma condição especificada é verdadeira
do/while - também percorre um bloco de código enquanto uma condição especificada é verdadeira
O For Loop
O forloop tem a seguinte sintaxe:

for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
A instrução 1 é executada (uma vez) antes da execução do bloco de código.

A instrução 2 define a condição para a execução do bloco de código.

A instrução 3 é executada (todas as vezes) após a execução do bloco de código.

Exemplo
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
No exemplo acima, você pode ler:

A instrução 1 define uma variável antes do início do loop (seja i = 0).

A instrução 2 define a condição para o loop ser executado (i deve ser menor que 5).

A instrução 3 aumenta um valor (i ++) cada vez que o bloco de código no loop é executado.

Declaração 1
Normalmente, você usará a instrução 1 para inicializar a variável usada no loop (seja i = 0).

Nem sempre é o caso, o JavaScript não se importa. A declaração 1 é opcional.

Você pode iniciar muitos valores na afirmação 1 (separados por vírgula):

Exemplo
for (let i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
}
E você pode omitir a declaração 1 (como quando seus valores são definidos antes do início do loop):

Exemplo
let i = 2;
let len = cars.length;
let text = "";
for (; i < len; i++) {
  text += cars[i] + "<br>";
}
Declaração 2
Freqüentemente, a afirmação 2 é usada para avaliar a condição da variável inicial.

Nem sempre é o caso, o JavaScript não se importa. A declaração 2 também é opcional.

Se a afirmação 2 retornar verdadeira, o laço começará novamente; se retornar falsa, o laço terminará.

Se você omitir a instrução 2, deverá fornecer uma pausa dentro do loop. Caso contrário, o loop nunca terminará. Isso irá travar seu navegador. Leia sobre as pausas em um capítulo posterior deste tutorial.

Declaração 3
Freqüentemente, a afirmação 3 incrementa o valor da variável inicial.

Nem sempre é o caso, o JavaScript não se importa e a instrução 3 é opcional.

A instrução 3 pode fazer qualquer coisa como incremento negativo (i--), incremento positivo (i = i + 15) ou qualquer outra coisa.

A declaração 3 também pode ser omitida (como quando você incrementa seus valores dentro do loop):

Exemplo
let i = 0;
let len = cars.length;
let text = "";
for (; i < len; ) {
  text += cars[i] + "<br>";
  i++;
}
Loop Scope
Usando varem um loop:

Exemplo
var i = 5;

for (var i = 0; i < 10; i++) {
  // some code
}

// Here i is 10
Usando letem um loop:

Exemplo
let i = 5;

for (let i = 0; i < 10; i++) {
  // some code
}

// Here i is 5
No primeiro exemplo, usando var, a variável declarada no loop reapresenta a variável fora do loop.

No segundo exemplo, usando let, a variável declarada no loop não declara novamente a variável fora do loop.

Quando leté usado para declarar a variável i em um loop, a variável i só será visível dentro do loop.

For / Of e For / In Loops
O for/inloop e o for/ofloop são explicados no próximo capítulo.

Loops While
O whileloop e o do/whilesão explicados nos próximos capítulos.
*/