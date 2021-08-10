//Comentários de JavaScript

/*
Comentários de JavaScript podem ser usados ​​para explicar o código JavaScript e torná-lo mais legível.

Comentários de JavaScript também podem ser usados ​​para evitar a execução, ao testar código alternativo.
*/

//Comentários de linha única

/*
Comentários de uma única linha começam com //.

Qualquer texto entre //e o final da linha será ignorado pelo JavaScript (não será executado).

Este exemplo usa um comentário de uma única linha antes de cada linha de código:
*/

// Alterar o título:
document.getElementById("myH").innerHTML = "My First Page";

// Alterar parágrafo:
document.getElementById("myP").innerHTML = "My first paragraph.";

/*
Este exemplo usa um comentário de uma única linha no final de cada linha para explicar o código:
*/

var x = 5;      // Declare x, dê a ele o valor de 5
var y = x + 2;  // Declare y, dê a ele o valor de x + 2

//Comentários de várias linhas

//Comentários multilinhas começam com /*e terminam com */.

//Qualquer texto entre /*e */será ignorado pelo JavaScript.

//Este exemplo usa um comentário de várias linhas (um bloco de comentário) para explicar o código:

/*
O código abaixo mudará o título com id = "myH" e o parágrafo com id = "myP" em minha página da web:
*/
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";

//Usando comentários para prevenir a execução

/*
Usar comentários para evitar a execução de código é adequado para teste de código.

Adicionar //na frente de uma linha de código altera as linhas de código de uma linha executável para um comentário.

Este exemplo usa // para evitar a execução de uma das linhas de código:
*/

//document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";