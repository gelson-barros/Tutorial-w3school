//Funções JavaScript

/*
Uma função JavaScript é um bloco de código projetado para executar uma tarefa específica.

Uma função JavaScript é executada quando "algo" a invoca (chama).
*/

function myFunction(p1, p2) {
    return p1 * p2; // A função retorna o produto de p1 e p2
}

//Sintaxe da função JavaScript

/*
Uma função JavaScript é definida com a function palavra - chave, seguida por um nome , seguida por parênteses () .

Os nomes das funções podem conter letras, dígitos, sublinhados e cifrões (mesmas regras das variáveis).

Os parênteses podem incluir nomes de parâmetros separados por vírgulas:
( parâmetro1, parâmetro2, ... )

O código a ser executado, pela função, é colocado entre chaves: {}
*/

function name(parameter1, parameter2, parameter3) {
    // código a ser executado
}

/*
Os parâmetros da função são listados entre parênteses () na definição da função.

Os argumentos da função são os valores recebidos pela função quando ela é chamada.

Dentro da função, os argumentos (os parâmetros) se comportam como variáveis ​​locais.
*/

/*
OBS:Uma Função é quase igual a um Procedimento ou uma Sub-rotina, em outras linguagens de programação.
*/

//Invocação de Função

/*
O código dentro da função será executado quando "algo" invocar (chamar) a função:

    -Quando ocorre um evento (quando um usuário clica em um botão)
    -Quando é invocado (chamado) a partir do código JavaScript
    -Automaticamente (auto-invocado)

*/

//Retorno de Função

/*
Quando o JavaScript atinge uma return instrução, a função para de ser executada.

Se a função foi chamada a partir de uma instrução, o JavaScript "retornará" para executar o código após a instrução de chamada.

As funções geralmente calculam um valor de retorno . O valor de retorno é "retornado" de volta ao "chamador":
Calcule o produto de dois números e retorne o resultado:
*/

var x = myFunction(4, 3); // Function is called, return value will end up in x

function myFunction(a, b) {
    return a * b; // Function returns the product of a and b
}

//O resultado em x será:12

//Por que funções?

/*
Você pode reutilizar o código: Defina o código uma vez e use-o várias vezes.

Você pode usar o mesmo código muitas vezes com argumentos diferentes, para produzir resultados diferentes.
Converter Fahrenheit para Celsius:
*/

function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}
document.getElementById("demo").innerHTML = toCelsius(77);

//O operador () invoca a função

/*
Usando o exemplo acima, toCelsiusrefere-se ao objeto de função e toCelsius()refere-se ao resultado da função.

Acessar uma função sem () retornará o objeto de função em vez do resultado da função.
*/

function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}
document.getElementById("demo").innerHTML = toCelsius;

//Funções usadas como valores variáveis

/*
As funções podem ser usadas da mesma maneira que você usa variáveis, em todos os tipos de fórmulas, atribuições e cálculos.
Em vez de usar uma variável para armazenar o valor de retorno de uma função:
*/

var x = toCelsius(77);
var text = "The temperature is " + x + " Celsius";
/*
Você pode usar a função diretamente, como um valor de variável:
*/
var text = "The temperature is " + toCelsius(77) + " Celsius";

//Variáveis ​​Locais

/*
Variáveis ​​declaradas em uma função JavaScript tornam-se LOCAIS para a função.

Variáveis ​​locais só podem ser acessadas de dentro da função.
*/

// o código aqui NÃO pode usar carName

function myFunction() {
    var carName = "Volvo";
    // código aqui PODE usar carName
}

// o código aqui NÃO pode usar carName

/*
Como as variáveis ​​locais só são reconhecidas dentro de suas funções, as variáveis ​​com o mesmo nome podem ser usadas em funções diferentes.

Variáveis ​​locais são criadas quando uma função é iniciada e excluídas quando a função é concluída.
*/