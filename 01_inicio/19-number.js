//Números de JavaScript

/*
JavaScript possui apenas um tipo de número. Os números podem ser escritos com ou sem decimais.
*/

var x = 3.14;    // A number with decimals
var y = 3;       // A number without decimals

/*
Números muito grandes ou muito pequenos podem ser escritos com notação científica (expoente):
*/

var x = 123e5;    // 12300000
var y = 123e-5;   // 0.00123


//Os números JavaScript são sempre pontos flutuantes de 64 bits

/*
Ao contrário de muitas outras linguagens de programação, JavaScript não define diferentes tipos de números, como inteiros, curtos, longos, ponto flutuante etc.

Os números JavaScript são sempre armazenados como números de ponto flutuante de precisão dupla, seguindo o padrão internacional IEEE 754.

Este formato armazena números em 64 bits, onde o número (a fração) é armazenado nos bits 0 a 51, o expoente nos bits 52 a 62 e o sinal no bit 63:

Valor (também conhecido como Fração / Mantissa)	Expoente	Assinar
52 bits (0 - 51) 	11 bits (52 - 62)	1 bit (63)
*/

//Precisão

/*
Os inteiros (números sem notação de ponto ou expoente) têm precisão de até 15 dígitos.
*/

var x = 999999999999999;   // x will be 999999999999999
var y = 9999999999999999;  // y will be 10000000000000000

/*
O número máximo de decimais é 17, mas a aritmética de ponto flutuante nem sempre é 100% precisa:
*/

var x = 0.2 + 0.1;         // x will be 0.30000000000000004

/*
Para resolver o problema acima, é útil multiplicar e dividir:
*/

var x = (0.2 * 10 + 0.1 * 10) / 10;       // x will be 0.3

//Adicionando Números e Strings

/*
AVISO !!

JavaScript usa o operador + para adição e concatenação.

Números são adicionados. Strings são concatenadas.
*/

/*
Se você adicionar dois números, o resultado será um número:
*/

var x = 10;
var y = 20;
var z = x + y;           // z will be 30 (a number)

/*
Se você adicionar duas strings, o resultado será uma concatenação de string:
*/

var x = "10";
var y = 20;
var z = x + y;           // z will be 1020 (a string)

/*Um erro comum é esperar que esse resultado seja 30:
*/

var x = 10;
var y = 20;
var z = "The result is: " + x + y;

/*
Um erro comum é esperar que esse resultado seja 102030:
*/

var x = 10;
var y = 20;
var z = "30";
var result = x + y + z;

/*
O interpretador JavaScript funciona da esquerda para a direita.

Os primeiros 10 + 20 são adicionados porque x e y são ambos números.

Então, 30 + "30" é concatenado porque z é uma string.
*/

//Strings Numéricos

/*
Strings JavaScript podem ter conteúdo numérico:
*/

var x = 100;         // x is a number

var y = "100";       // y is a string

/*
JavaScript tentará converter strings em números em todas as operações numéricas:

Isso vai funcionar:
*/

var x = "100";
var y = "10";
var z = x / y;       // z will be 10

/*
Isso também funcionará:
*/

var x = "100";
var y = "10";
var z = x * y;       // z will be 1000

/*
E isso vai funcionar:
*/

var x = "100";
var y = "10";
var z = x - y;       // z will be 90

/*
Mas isso não vai funcionar:
*/

var x = "100";
var y = "10";
var z = x + y;       // z will not be 110 (It will be 10010)

/*
OBS:No último exemplo, JavaScript usa o operador + para concatenar as strings.
*/

//NaN - Não é um número

/*
NaN é uma palavra reservada de JavaScript que indica que um número não é um número legal.

Tentar fazer aritmética com uma string não numérica resultará em NaN(Não é um número):
*/

var x = 100 / "Apple";  // x will be NaN (Not a Number)

/*
No entanto, se a string contiver um valor numérico, o resultado será um número:
*/

var x = 100 / "10";     // x will be 10

/*
Você pode usar a função JavaScript global 
isNaN()para descobrir se um valor é um número:
*/

var x = 100 / "Apple";
isNaN(x);               // returns true because x is Not a Number

/*
Cuidado com NaN. Se você usar NaNem uma operação matemática, o resultado também será NaN:
*/

var x = NaN;
var y = 5;
var z = x + y;         // z will be NaN

/*
Ou o resultado pode ser uma concatenação:
*/

var x = NaN;
var y = "5";
var z = x + y;         // z will be NaN5

/*
NaN é um número: typeof NaNretorna number:
*/

typeof NaN;            // returns "number"

//Infinity (Infinidade)

/*
Infinity(ou -Infinity) é o valor que o JavaScript retornará se você calcular um número fora do maior número possível.
*/

var myNumber = 2;
while (myNumber != Infinity) {
    // Execute until Infinity
    myNumber = myNumber * myNumber;
}

/*
A divisão por 0 (zero) também gera Infinity:
*/

var x =  2 / 0;       // x will be Infinity
var y = -2 / 0;       // y will be -Infinity

/*
Infinityé um número: typeof Infinityretorna number.
*/

typeof Infinity;     // returns "number"

//Hexadecimal

var x = 0xFF;        // x will be 255

/*
OBS:Nunca escreva um número com um zero à esquerda (como 07).
Algumas versões do JavaScript interpretam os números como octais se forem escritos com um zero à esquerda
*/

/*
Por padrão, o JavaScript exibe números como casas decimais de base 10 .

Mas você pode usar o toString()método para produzir números da base 2 à base 36 .

Hexadecimal é a base 16 . O decimal é de base 10 . Octal é a base 8 . O binário é a base 2 .
*/

var myNumber = 32;
myNumber.toString(10);  // returns 32
myNumber.toString(32);  // returns 10
myNumber.toString(16);  // returns 20
myNumber.toString(8);   // returns 40
myNumber.toString(2);   // returns 100000

//Números podem ser objetos

/*
Normalmente, os números de JavaScript são valores primitivos criados a partir de literais:

var x = 123;

Mas os números também podem ser definidos como objetos com a palavra new- chave :

var y = new Number(123);
*/

var x = 123;
var y = new Number(123);

// typeof x returns number
// typeof y returns object

/*
Não crie objetos Number. Isso diminui a velocidade de execução.
A newpalavra-chave complica o código. Isso pode produzir alguns resultados inesperados:

Ao usar o ==operador, números iguais são iguais:

*/

var x = 500;             
var y = new Number(500);

// (x == y) is true because x and y have equal values

/*
Ao usar o ===operador, números iguais não são iguais, porque o ===operador espera igualdade tanto no tipo quanto no valor.
*/

var x = 500;             
var y = new Number(500);

// (x === y) is false because x and y have different types

/*
Ou ainda pior. Objetos não podem ser comparados:
*/

/*
OBS:Observe a diferença entre (x==y)e (x===y).
Comparar dois objetos JavaScript sempre retornará false.
*/