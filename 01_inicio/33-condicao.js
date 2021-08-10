//JavaScript if else e else if

/*
As instruções condicionais são usadas para executar ações diferentes com base em condições diferentes.

Declarações condicionais
Muitas vezes, ao escrever código, você deseja executar ações diferentes para decisões diferentes.

Você pode usar instruções condicionais em seu código para fazer isso.

Em JavaScript, temos as seguintes instruções condicionais:

Use ifpara especificar um bloco de código a ser executado, se uma condição especificada for verdadeira
Use elsepara especificar um bloco de código a ser executado, se a mesma condição for falsa
Use else ifpara especificar uma nova condição para testar, se a primeira condição for falsa
Use switchpara especificar muitos blocos de código alternativos a serem executados
A switchdeclaração é descrita no próximo capítulo.

A declaração if
Use a ifinstrução para especificar um bloco de código JavaScript a ser executado se uma condição for verdadeira.

Sintaxe
if (condition) {
  //  block of code to be executed if the condition is true
}
Observe que ifestá em letras minúsculas. Letras maiúsculas (If ou IF) irão gerar um erro de JavaScript.

Exemplo
Faça uma saudação de "Bom dia" se a hora for inferior a 18:00:

if (hour < 18) {
  greeting = "Good day";
}
O resultado da saudação será:

Good day
A declaração else
Use a elseinstrução para especificar um bloco de código a ser executado se a condição for falsa.

if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}
Exemplo
Se a hora for inferior a 18, crie uma saudação de "Bom dia", caso contrário, "Boa noite":

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
O resultado da saudação será:

A declaração else if
Use a else ifinstrução para especificar uma nova condição se a primeira condição for falsa.

Sintaxe
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
Exemplo
Se o tempo for inferior a 10:00, crie uma saudação de "Bom dia", caso contrário, mas o tempo for inferior a 20:00, crie uma saudação de "Bom dia", caso contrário, uma saudação de "Boa noite":

if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
O resultado da saudação será:
*/