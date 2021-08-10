//Variáveis JavaScript

/*
Variáveis ​​JavaScript são contêineres para armazenar valores de dados.

Neste exemplo, x, y e z são variáveis, declarada com a var palavra-chave:
*/

var x = 5;
var y = 6;
var z = x + y;
console.log(z);

/*
A partir do exemplo acima, você pode esperar:

x armazena o valor 5
y armazena o valor 6
z armazena o valor 11
*/

//Usando let e const (ES6)

/*
Antes de 2015, usar a var palavra - chave era a única maneira de declarar uma variável JavaScript.

A versão 2015 do JavaScript (ES6) permite o uso da const palavra-chave para definir uma variável que não pode ser reatribuída e a let palavra-chave para definir uma variável com escopo restrito.

Como é um pouco complicado descrever a diferença entre essas palavras-chave e porque elas não são suportadas em navegadores mais antigos, a primeira parte deste tutorial será usada com mais frequência var.

Safari 10 e Edge 14 foram os primeiros navegadores a oferecer suporte total ao ES6:

*/

/*
Chrome 58	Edge 14	   Firefox 54	Safari 10	Opera 55
Jan 2017	Aug 2016	Mar 2017	Jul 2016	Aug 2018

*/

//Muito parecido com álgebra

/*
Neste exemplo, price1, price2 e total são variáveis:
*/

var price1 = 5;
var price2 = 6;
var total = price1 + price2;
console.log(total)

/*
Na programação, assim como na álgebra, usamos variáveis ​​(como o preço1) para manter os valores.

Na programação, assim como na álgebra, usamos variáveis ​​nas expressões (total = price1 + price2).

A partir do exemplo acima, você pode calcular o total como 11.

OBS:Variáveis ​​JavaScript são contêineres para armazenar valores de dados.
*/

//Identificadores JavaScript

/*

Todas as variáveis JavaScript devem ser identificadas com nomes exclusivos .

Esses nomes exclusivos são chamados de identificadores .

Os identificadores podem ser nomes curtos (como x e y) ou nomes mais descritivos (idade, soma, volume total).

As regras gerais para construir nomes para variáveis ​​(identificadores únicos) são:

    -Os nomes podem conter letras, dígitos, sublinhados e cifrões.
    -Os nomes devem começar com uma letra
    -Os nomes também podem começar com $ e _ (mas não os usaremos neste tutorial)
    -Os nomes diferenciam maiúsculas de minúsculas (y e Y são variáveis ​​diferentes)
    -Palavras reservadas (como palavras-chave JavaScript) não podem ser usadas como nomes
OBS:Os identificadores de JavaScript diferenciam maiúsculas de minúsculas.
*/


//O Operador de Atribuição

/*
Em JavaScript, o sinal de igual ( =) é um operador de "atribuição", não um operador "igual a".

Isso é diferente de álgebra. O seguinte não faz sentido em álgebra:
*/

x = x + 5;
console.log(x)
/*
Em JavaScript, entretanto, faz todo o sentido: atribui o valor de x + 5 a x.

(Ele calcula o valor de x + 5 e coloca o resultado em x. O valor de x é incrementado em 5.)

OBS:O operador "igual a" é escrito como == em JavaScript.
*/

//Tipos de dados JavaScript

/*
Variáveis ​​JavaScript podem conter números como 100 e valores de texto como "John Doe".

Na programação, os valores de texto são chamados de strings de texto.

JavaScript pode lidar com muitos tipos de dados, mas por enquanto, pense apenas em números e strings.

As strings são escritas entre aspas duplas ou simples. Os números são escritos sem aspas.

Se você colocar um número entre aspas, ele será tratado como uma string de texto.
*/

var pi = 3.14;
var person = "John Doe";
var answer = "Yes I am!";

//Declarando (criando) variáveis ​​JavaScript

/*
A criação de uma variável em JavaScript é chamada de "declaração" de uma variável.

Você declara uma variável JavaScript com a var palavra-chave:
*/

var carName;
//console.log(carName)//undefined
/*
Após a declaração, a variável não tem valor (tecnicamente, tem o valor de undefined).

Para atribuir um valor à variável, use o sinal de igual:
*/

carName = "Volvo";

/*
Você também pode atribuir um valor à variável ao declará-la:
*/

var carName = "Volvo";

/*
No exemplo abaixo, criamos uma variável chamada carNamee atribuímos o valor "Volvo" a ela.

Em seguida, "exibimos" o valor dentro de um parágrafo HTML com id = "demo":
*/

/*
<p id="demo"></p>

<script>
var carName = "Volvo";
document.getElementById("demo").innerHTML = carName;
</script>
*/

//Uma Declaração, muitas variáveis

/*
Você pode declarar muitas variáveis ​​em uma instrução.

Comece a instrução com var e separe as variáveis ​​por vírgula :
*/

var person = "John Doe", carName = "Volvo", price = 200;

/*
Uma declaração pode abranger várias linhas:
*/

var person = "John Doe",
carName = "Volvo",
price = 200;

//Valor = undefined

/*
Em programas de computador, as variáveis ​​são frequentemente declaradas sem valor. O valor pode ser algo que precisa ser calculado ou algo que será fornecido posteriormente, como uma entrada do usuário.

Uma variável declarada sem um valor terá o valor undefined.

A variável carName terá o valor undefined após a execução desta instrução:
*/
var carName;

//Re-declaração de variáveis ​​JavaScript

/*
Se você declarar novamente uma variável JavaScript, ela não perderá seu valor.

A variável carName ainda terá o valor "Volvo" após a execução dessas instruções:
*/

var carName = "Volvo";
var carName;

//Aritmética JavaScript

/*
Assim como na álgebra, você pode fazer aritmética com variáveis ​​JavaScript, usando operadores como = e +:
*/

var x = 5 + 2 + 3;

/*
Você também pode adicionar strings, mas as strings serão concatenadas:
*/

var x = "John" + " " + "Doe";

/*
Experimente também:
*/

var x = "5" + 2 + 3;

/*
OBS:Se você colocar um número entre aspas, o resto dos números serão tratados como strings e concatenados.
*/

/*
Agora tente isto:
*/

var x = 2 + 3 + "5";

//JavaScript cifrão $


/*
Lembre-se de que os identificadores (nomes) JavaScript devem começar com:

    -Uma letra (AZ ou az)
    -Um cifrão ($)
    -Ou um sublinhado (_)
Como o JavaScript trata o cifrão como uma letra, os identificadores que contêm $ são nomes de variáveis ​​válidos:
*/

var $$$ = "Hello World";
var $ = 2;
var $myMoney = 5;

/*
Usar o cifrão não é muito comum em JavaScript, mas os programadores profissionais costumam usá-lo como um alias para a função principal em uma biblioteca JavaScript.

Na biblioteca JavaScript jQuery, por exemplo, a função principal $ é usada para selecionar elementos HTML. Em jQuery $("p");significa "selecionar todos os elementos p".
*/

//Sublinhado de JavaScript (_)

/*
Como o JavaScript trata o sublinhado como uma letra, os identificadores que contêm _ são nomes de variáveis ​​válidos:
*/

var _lastName = "Johnson";
var _x = 2;
var _100 = 5;

/*
Usar o sublinhado não é muito comum em JavaScript, mas uma convenção entre os programadores profissionais é usá-lo como um apelido para variáveis ​​"privadas (ocultas)".
*/