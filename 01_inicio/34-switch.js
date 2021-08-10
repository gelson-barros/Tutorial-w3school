//Declaração de mudança de JavaScript

/*
A switchinstrução é usada para executar ações diferentes com base em condições diferentes.

A declaração de mudança de JavaScript
Use a switchinstrução para selecionar um dos muitos blocos de código a serem executados.

Sintaxe
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
É assim que funciona:

A expressão switch é avaliada uma vez.
O valor da expressão é comparado com os valores de cada caso.
Se houver uma correspondência, o bloco de código associado é executado.
Se não houver correspondência, o bloco de código padrão é executado.
Exemplo
O getDay()método retorna o dia da semana como um número entre 0 e 6.

(Domingo = 0, Segunda = 1, Terça = 2 ..)

Este exemplo usa o número do dia da semana para calcular o nome do dia da semana:

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
O resultado do dia será:

Thursday
A palavra-chave break
Quando o JavaScript atinge uma break palavra - chave, ele sai do bloco de alternância.

Isso interromperá a execução dentro do bloco de switch.

Não é necessário interromper o último caso em um bloco de switch. O bloco quebra (termina) ali de qualquer maneira.

Nota: Se você omitir a instrução break, o próximo caso será executado mesmo se a avaliação não corresponder ao caso.

A palavra-chave padrão
A defaultpalavra-chave especifica o código a ser executado se não houver correspondência de maiúsculas e minúsculas:

Exemplo
O getDay()método retorna o dia da semana como um número entre 0 e 6.

Se hoje não é sábado (6) nem domingo (0), escreva uma mensagem padrão:

switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}
O resultado do texto será:

Looking forward to the Weekend
O defaultcaso não precisa ser o último caso em um bloco de switch:

Exemplo
switch (new Date().getDay()) {
  default:
    text = "Looking forward to the Weekend";
    break;
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
}
Se defaultnão for o último caso no bloco de switch, lembre-se de encerrar o caso padrão com uma pausa.

Blocos de código comuns
Às vezes, você desejará que diferentes casos de switch usem o mesmo código.

Neste exemplo, os casos 4 e 5 compartilham o mesmo bloco de código e 0 e 6 compartilham outro bloco de código:

Exemplo
switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}
Detalhes de troca
Se vários casos corresponderem a um valor de caso, o primeiro caso será selecionado.

Se nenhum caso correspondente for encontrado, o programa continuará com o rótulo padrão .

Se nenhum rótulo padrão for encontrado, o programa continua com a (s) instrução (ões) após a troca .

Comparação Estrita
Os casos de troca usam comparação estrita (===).

Os valores devem ser do mesmo tipo para corresponder.

Uma comparação estrita só pode ser verdadeira se os operandos forem do mesmo tipo.

Neste exemplo, não haverá correspondência para x:

Exemplo
let x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
*/