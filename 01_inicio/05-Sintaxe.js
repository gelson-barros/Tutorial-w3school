//Sintaxe JavaScript

//A sintaxe JavaScript é o conjunto de regras, como os programas JavaScript são construídos:

var x, y, z;       // Declarar Variáveis
x = 5; y = 6;      // Atribuir Valores
z = x + y;         // Calcular Valores

//Valores de JavaScript

/*
A sintaxe JavaScript define dois tipos de valores:
    .Valores fixos
    .Valores variáveis

Os valores fixos são chamados de literais .

Os valores das variáveis ​​são chamados de Variáveis .
*/

//Literais JavaScript

/*
As duas regras de sintaxe mais importantes para valores fixos são:

1. Os números são escritos com ou sem decimais:
*/
10.50

1001

/*
2. Strings são textos, escritos entre aspas duplas ou simples:
*/
"John Doe"

'John Doe'

//Variáveis ​​JavaScript

/*
Em uma linguagem de programação, as variáveis são usadas para armazenar valores de dados.

JavaScript usa a var palavra-chave para declarar variáveis.

Um sinal de igual é usado para atribuir valores às variáveis.

Neste exemplo, x é definido como uma variável. Então, x recebe (dado) o valor 6:
*/
var x;

x = 6;

//Operadores de JavaScript
/*
JavaScript usa operadores aritméticos ( + - * /) para calcular valores:
*/

(5 + 6) * 10;

/*
JavaScript usa um operador de atribuição ( =) para atribuir valores às variáveis:
*/
var x, y;
x = 5;
y = 6;

//Expressões JavaScript
/*
Uma expressão é uma combinação de valores, variáveis ​​e operadores, que calcula para um valor.

O cálculo é chamado de avaliação.

Por exemplo, 5 * 10 avalia para 50:
*/

5 * 10;

/*
As expressões também podem conter valores variáveis:
*/

x * 10;

/*
Os valores podem ser de vários tipos, como números e strings.

Por exemplo, "John" + "" + "Doe", avalia como "John Doe":
*/

"John" + " " + "Doe";

//Palavras-chave JavaScript

/*
Palavras- chave JavaScript são usadas para identificar ações a serem realizadas.

A var palavra-chave diz ao navegador para criar variáveis:
*/

var x, y;
x = 5 + 6;
y = x * 10;

//Comentários de JavaScript

//Nem todas as instruções JavaScript são "executadas".
//
//O código após barras duplas //ou entre /* e */ é tratado como um comentário .
//
//Os comentários são ignorados e não serão executados:

var x = 5;   // Vai ser executado

// var x = 6;   Não vai ser executado



//Identificadores JavaScript

/*
Identificadores são nomes.

Em JavaScript, os identificadores são usados ​​para nomear variáveis ​​(e palavras-chave, funções e rótulos).

As regras para nomes legais são praticamente as mesmas na maioria das linguagens de programação.

Em JavaScript, o primeiro caractere deve ser uma letra, um sublinhado (_) ou um cifrão ($).

Os caracteres subsequentes podem ser letras, dígitos, sublinhados ou cifrões.
*/

//JavaScript diferencia maiúsculas de minúsculas

/*
Todos os identificadores JavaScript são sensíveis a maiúsculas e minúsculas . 

As variáveis lastNamee lastname, são duas variáveis ​​diferentes:
*/

var lastname, lastName;
lastName = "Doe";
lastname = "Peterson";

/*
OBS:JavaScript não interpreta VAR ou Var como a palavra-chave var .
*/



//JavaScript e Camel Case

/*
Historicamente, os programadores têm usado diferentes maneiras de juntar várias palavras em um nome de variável:

Hífens:

nome, sobrenome, cartão-mestre, entre cidades.
*/

/*
OBS:Hífens não são permitidos em JavaScript. Eles são reservados para subtrações.
*/


/*

Sublinhado:

    first_name, last_name, master_card, inter_city.

Upper Camel Case (Pascal Case):

    FirstName, LastName, MasterCard, InterCity.

Estojo Lower Camel:

Os programadores de JavaScript tendem a usar maiúsculas e minúsculas que começam com uma letra minúscula:

firstName, lastName, masterCard, interCity.

*/

//Conjunto de caracteres JavaScript

/*
JavaScript usa o conjunto de caracteres Unicode .

O Unicode cobre (quase) todos os caracteres, pontuações e símbolos do mundo.

Para uma análise mais detalhada, estude nossa Referência Unicode Completa .
*/