//Objeto JavaScript Math

/*
O objeto JavaScript Math permite que você execute tarefas matemáticas em números.
*/

Math.PI;            // returns 3.141592653589793

//O Objeto Matemático
/*
Ao contrário de outros objetos, o objeto Math não tem construtor.

O objeto Math é estático.

Todos os métodos e propriedades podem ser usados ​​sem criar um objeto Math primeiro.
*/

//Propriedades matemáticas (constantes)
/*
A sintaxe para qualquer propriedade matemática é: .Math.property

JavaScript fornece 8 constantes matemáticas que podem ser acessadas como propriedades matemáticas:
*/

Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E

//Métodos Matemáticos

/*
A sintaxe para qualquer método Math é: Math.method.(number)

Número para inteiro
Existem 4 métodos comuns para arredondar um número para um inteiro:
*/

Math.round (x)	// Retorna x arredondado para o número inteiro mais próximo
Math.ceil (x)	// Retorna x arredondado para o número inteiro mais próximo
Math.floor (x)	// Retorna x arredondado para baixo para o número inteiro mais próximo
Math.trunc (x)	// Retorna a parte inteira de x ( novo no ES6 )

//Math.round ()

//Math.round(x) //retorna o número inteiro mais próximo:


Math.round(4.9);    // returns 5
Math.round(4.7);    // returns 5
Math.round(4.4);    // returns 4
Math.round(4.2);    // returns 4
Math.round(-4.2);    // returns -4

//Math.ceil ()

//Math.ceil(x)  //retorna o valor de x arredondado para cima para seu inteiro mais próximo:

Math.ceil(4.9);     // returns 5
Math.ceil(4.7);     // returns 5
Math.ceil(4.4);     // returns 5
Math.ceil(4.2);     // returns 5
Math.ceil(-4.2);     // returns -4

// Math.floor ()
// Math.floor(x)  //a o valor de x arredondado para baixo para o número inteiro mais próximo:


Math.floor(4.9);    // returns 4
Math.floor(4.7);    // returns 4
Math.floor(4.4);    // returns 4
Math.floor(4.2);    // returns 4
Math.floor(-4.2);    // returns -5

// Math.trunc ()
// Math.trunc(x) // retorna a parte inteira de x:


Math.trunc(4.9);    // returns 4
Math.trunc(4.7);    // returns 4
Math.trunc(4.4);    // returns 4
Math.trunc(4.2);    // returns 4
Math.trunc(-4.2);    // returns -4

//  Math.sign ()
//  Math.sign(x) retorna se x for negativo, nulo ou positivo:

Exemplo
Math.sign(-4);    // returns -1
Math.sign(0);    // returns 0
Math.sign(4);    // returns 1

/*
OBS: Math.trunc () e Math.sign () foram adicionados ao JavaScript 2015 - ES6 .
*/


//Math.pow ()
//Math.pow(x, y) //retorna o valor de x à potência de y:


Math.pow(8, 2);      // returns 64

// Math.sqrt ()
// Math.sqrt(x) //retorna a raiz quadrada de x:


Math.sqrt(64);      // returns 8

// Math.abs ()
// Math.abs(x) // retorna o valor absoluto (positivo) de x:


Math.abs(-4.7);     // returns 4.7

//Math.sin ()/
/*
Math.sin(x) retorna o seno (um valor entre -1 e 1) do ângulo x (dado em radianos).

Se quiser usar graus em vez de radianos, você deve converter graus em radianos:

Ângulo em radianos = Ângulo em graus x PI / 180.
*/

Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)

// Math.cos ()

/*
Math.cos(x) retorna o cosseno (um valor entre -1 e 1) do ângulo x (dado em radianos).

Se quiser usar graus em vez de radianos, você deve converter graus em radianos:

Ângulo em radianos = Ângulo em graus x PI / 180.
*/
Math.cos(0 * Math.PI / 180);     // returns 1 (the cos of 0 degrees)

// Math.min () e Math.max ()
/*
Math.min()e Math.max()pode ser usado para encontrar o valor mais baixo ou mais alto em uma lista de argumentos:
*/

Math.min(0, 150, 30, 20, -8, -200);  // returns -200
Math.max(0, 150, 30, 20, -8, -200);  // returns 150

//Math.random ()
/*
Math.random() retorna um número aleatório entre 0 (inclusivo) e 1 (exclusivo):
*/
Math.random();     // returns a random number

// O Método Math.log ()

/*
Math.log(x) retorna o logaritmo natural de x:

Exemplo
Math.log(1);    // returns 0
O logaritmo natural retorna o tempo necessário para atingir um determinado nível de crescimento.

Math.E e Math.log () são gêmeos.

Quantas vezes devemos multiplicar Math.E para obter 10?
*/


Math.log(10);    // returns 2.302585092994046

// O Método Math.log2 ()

/*
Math.log2(x) retorna o logaritmo de base 2 de x.

Quantas vezes devemos multiplicar 2 para obter 8?
*/


Math.log2(8);    // returns 3

/*
O Método Math.log10 ()
Math.log10(x) retorna o logaritmo de base 10 de x.

Quantas vezes devemos multiplicar 10 para obter 1000?
*/

Math.log10(1000);    // returns 3

//Métodos de Objeto Matemático