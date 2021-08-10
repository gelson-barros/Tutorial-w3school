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

//Escopo

{
    var x = 2;
}
// x PODE ser usado aqui
console.log(x)

{
  let y = 2;
}
// y PODE ser usado aqui
//console.log(y)

var i = 5;
for (var i = 0; i < 10; i++) {
    // algumas declarações
}
// Aqui estou eu 10
console.log(i);

let z = 5;
for (let z = 0; z < 10; z++) {
    // algumas declarações
}
// Aqui estou eu 5
console.log(z);

function myFunction() {
    var carName1 = "Volvo"; // Escopo da Função
}
//console.log(carName1)

function myFunction() {
    let carName2 = "Volvo"; // Escopo da Função
}
//console.log(carName2)

var x1 = 2;       // Global scope

let x2 = 2;       // Global scope

//redeclarado

var x3 = 2;

// Agora x3 é 2
 
var x3 = 3;

// Agora x3 é 3

//Não é permitido redeclarar uma varvariável com let, no mesmo escopo, ou no mesmo bloco:

//var x4 = 2; // Permitido
//let x4 = 3; // Não é Permitido

//{
//    var x4 = 4; // Permitido
//    let x4 = 5; // Não é Permitido
//}

//Não é permitido redeclarar uma let variável com let, no mesmo escopo, ou no mesmo bloco:

//let x5 = 2; // Permitido
//let x5 = 3; // Não é Permitido

//{
//    let x5 = 4; // Permitido
//    let x5 = 5; // Não é Permitido
//}

//Não é permitido redeclarar uma let variável com var, no mesmo escopo, ou no mesmo bloco:

//let x6 = 2; // Permitido
//var x6 = 3; // Não é Permitido

//{
//    let x6 = 4; // Permitido
//    var x6 = 5; // Não é Permitido
//}

//Redeclarar uma variável com let, em outro escopo, ou em outro bloco, é permitido:

let x7 = 2; // Permitido

{
    let x7 = 3; // Permitido
}

{
    let x7 = 4; // Permitido
}


//Isso está certo:
carName3 = "Volvo";
console.log(carName3);
var carName3;


//Isso resultará em ReferenceError:
//carName4 = "Volvo";
//let carName4;

//Variáveis ​​definidas com const se comportam como let variáveis, exceto que não podem ser reatribuídas:

const PI = 3.141592653589793;
//PI = 3.14;      // Isso dará um erro
//PI = PI + 10;   // Isso também gerará um erro

var x = 10;
// Aqui x é 10
{
    const x = 2;
    // Aqui x é 2
}
// Aqui x é 10

// Incorreta
//const PI;
//PI = 3.14159265359;

// Correto
//const PI = 3.14159265359;

// A palavra const- chave é um pouco enganosa.

// Ele NÃO define um valor constante. Ele define uma referência constante a um valor.

// Por causa disso, não podemos alterar valores primitivos constantes, mas podemos alterar as propriedades de objetos constantes.~

// Valores primitivos

// Se atribuirmos um valor primitivo a uma constante, não podemos alterar o valor primitivo:

//const PI = 3.141592653589793;
//PI = 3.14;      // Isso dará um erro
//PI = PI + 10;   // Isso também gerará um erro

// Objetos constantes podem mudar

// Você pode alterar as propriedades de um objeto constante:

// Você pode criar um objeto const:
const car = {type:"Fiat", model:"500", color:"white"};

// Você pode alterar uma propriedade:
car.color = "red";

// Você pode adicionar uma propriedade:
car.owner = "Johnson";

//const car1 = {type:"Fiat", model:"500", color:"white"};
//car1 = {type:"Volvo", model:"EX60", color:"red"};    // ERROR

// Matrizes constantes podem mudar

//Você pode alterar os elementos de uma matriz constante:

// Você pode criar uma matriz constante:
const cars = ["Saab", "Volvo", "BMW"];

// Você pode alterar um elemento:
cars[0] = "Toyota";

// Você pode adicionar um elemento:
cars.push("Audi");

// Mas você NÃO pode reatribuir uma matriz constante:

//const cars = ["Saab", "Volvo", "BMW"];
//cars = ["Toyota", "Volvo", "Audi"];    // ERROR

//Redeclarando

//Redeclarar uma var variável JavaScript é permitido em qualquer lugar em um programa:
//var x = 2;    //  Permitido
//var x = 3;    //  Permitido
//x = 4;        //  Permitido

//Não é permitido redeclarar ou reatribuir uma variável existente var ou , no mesmo escopo, ou no mesmo bloco:let const

//var x = 2; // Permitido
//const x = 2; // Não permitido
//{
//    let x = 2; // Permitido
//    const x = 2; // Não permitido
//}

//Não é permitido redeclarar ou reatribuir uma constvariável existente , no mesmo escopo ou no mesmo bloco:

//const x = 2; // Permitido
//const x = 3; // Não permitido
//x = 3; // Não permitido
//
//var x = 3; // Não permitido
//let x = 3; // Não permitido

//{
//    const x = 2; // Permitido
//    const x = 3; // Não permitido
//    x = 3; // Não permitido
//    var x = 3; // Não permitido
//    let x = 3; // Não permitido
//}

//Redeclarar uma variável com const, em outro escopo, ou em outro bloco, é permitido:

//const x = 2; // Permitido
//
//{
//    const x = 3; // Permitido
//}
//
//{
//    const x = 4; // Permitido
//}

//Isso está certo:
carName4 = "Volvo";
console.log(carName4);
var carName4;

////Isso não dará certo
//carName5 = "Volvo";
//const carName5;

/*
Operator	Description
+	        Addition
-	        Subtraction
*	        Multiplication
**	        Exponentiation (ES2016)
/	        Division
%	        Modulus (Division Remainder)
++	        Increment
--	        Decrement
*/
//Os operadores de atribuição atribuem valores a variáveis ​​JavaScript.
/*
Operator	Examplo    Igual a
=	        x = y	    x = y
+=	        x += y	    x = x + y
-=	        x -= y	    x = x - y
*=	        x *= y	    x = x * y
/=	        x /= y	    x = x / y
%=	        x %= y	    x = x % y
**=	        x **= y	    x = x ** y
*/

//Operadores de comparação de JavaScript

/*
Operator	Description
==	        igual a
===	        valor igual e tipo igual
!=	        não igual
!==	        valor diferente ou tipo diferente
>	        Maior que
<	        Menor que
>=	        maior que ou igual a
<=	        menor que ou igual a
?	        operador ternário
*/

//Operadores lógicos de JavaScript

/*
Operator	Description
&&	        logical and
||	        logical or
!	        logical not
*/

//Operadores de tipo JavaScript

/*
Operator	    Description
typeof	        Retorna o tipo de uma variável
instanceof	    Retorna verdadeiro se um objeto é uma instância de um tipo de objeto
*/

//Operadores JavaScript bit a bit

/*
Os operadores de bits funcionam com números de 32 bits.

Qualquer operando numérico na operação é convertido em um número de 32 bits. O resultado é convertido de volta para um número JavaScript.
*/

/*
Operator	Description	            Example	  Igual a	    Resultado   Decimal
&	        AND	                    5 & 1	  0101 & 0001	0001	    1
|	        OR	                    5 | 1	  0101 | 0001	0101	    5
~	        NOT	                    ~ 5	      ~0101	        1010	    10
^	        XOR	                    5 ^ 1	  0101 ^ 0001	0100	    4
<<	        Zero fill left shift	5 << 1	  0101 << 1	    1010	    10
>>	        Signed right shift	    5 >> 1	  0101 >> 1	    0010	    2
>>>	        Zero fill right shift	5 >>> 1	  0101 >>>1     10010	    2
*/
/*
OBS:
Os exemplos acima usam exemplos sem sinal de 4 bits. Mas o JavaScript usa números assinados de 32 bits.
Por causa disso, em JavaScript, ~ 5 não retornará 10. Ele retornará -6.
~ 00000000000000000000000000000101 retornará 1111111111111111111111111111111010
Operadores bit a bit são totalmente descritos no capítulo JS Bitwise .
*/
console.log(5 & 1);//and -> 1
console.log(5 | 1);//or -> 5
console.log(5 ^ 1);//xor -> 4
console.log(~5);//not -> -6
console.log(5 << 1);//Zero fill left shift -> 10
console.log(5 >> 1);//Signed right shift -> 2
console.log(5 >>> 1);//Zero fill right shift -> 2

/*
O operador de exponenciação ( **) eleva o primeiro operando à potência do segundo operando.
*/

var x1 = 5;
var z1 = x1 ** 2;          // resultado é 25
console.log(z1)
//x ** y produz o mesmo resultado que Math.pow(x,y):

var x3 = 5;
var z2 = Math.pow(x3,2);   // resultado é 25
console.log(z2);


//Valores de precedência do operador JavaScript

/*
Valor	Operador	    Descrição	                Exemplo
21	       ()	    Agrupamento de expressão	    (3 + 4)
 	 	 	 
20	        .	        Membro	                   pessoa.nome
20	        []	        Membro	                pessoa ["nome"]
20	        ()	    Chamada de função	        myFunction ()
20	        new	        Crio	                    new data()
 	 	 	 
18	        ++	    Incremento Postfix	            i++
18	        --	    Decremento Postfix	            i--
 	 	 	 
17	        ++	    Incremento do prefixo	        ++i
17	        --	    Diminuição do prefixo	        --i
17	        !	    Lógico não	                 ! (x == y)
17	        typeof	    Modelo	                  typeof x
 	 	 	 
16	        **	    Exponenciação (ES2016)	        10 ** 2
 	 	 	 
15	        *	        Multiplicação	            10 * 5
15	        /	        Divisão	                    10/5
15	        %	    Restante da Divisão	            10% 5
 	 	 	 
14	        +	        Adição	                    10 + 5
14	        -	        Subtração	                10 - 5
 	 	 	 
13	        <<	        Shift left	                x << 2
13	        >>	        Deslocar para a direita	    x >> 2
13	        >>>	        Shift à direita (sem sinal)	x >>> 2
 	 	 	 
12	        <	        Menor que	                x <y 
12	        <=	        Menor ou igual	            x <= y
12	        >	        Maior que	x> y
12	        >=	        Maior ou igual	x> = y
12	        in	        Propriedade no objeto	    "PI" in Math
12	    instanceof	    Instância do objeto	        instanceof Array
 	 	 	 
11	        ==	        Igual	                    x == y
11	        ===	        Estrito igual	            x === y
11	        !=	        Desigual	                x!= y
11	        !==	        Estritamente desigual	    x! == y
 	 	 	 
10	        &	        AND bit a bit (Bitwise AND) x & y
9	        ^	        XOR bit a bit(Bitwise XOR)	x ^ y
8	        |	        OR bit a bit(Bitwise OR)    x | y
7	        &&	        AND lógico	                x && y
6	        ||	        OR lógico	                x || y
5	        ??	        Nullish Coalescing	        x ?? y
4	        ?:	        Condição	                ? "Sim :não"
 	 	 	 
3	        +=	        Tarefa	                    x += y
3	        /=	        Tarefa	                    x /= y
3	        -=	        Tarefa	                    x -= y
3	        *=	        Tarefa	                    x *= y
3	        %=	        Tarefa	                    x %= y
3	        <<=	        Tarefa	                    x <<= y
3	        >>=	        Tarefa	                    x >>= y
3	        >>>=	    Tarefa	                    x >>>= y
3	        &=	        Tarefa	                    x &= y
3	        ^=	        Tarefa	                    x ^= y
3	        |=	        Tarefa	                    x |= y
 	 	 	 
2	        yield	    Função de pausa	            rendimento x
1	        ,	        Vírgula	                    5, 6
*/

/*
OBS:As expressões entre parênteses são totalmente calculadas antes que o valor seja usado no restante da expressão.
*/

//Operadores de atribuição de JavaScript

/*
Os operadores de atribuição atribuem valores a variáveis ​​JavaScript.
*/

/*
Operator	Example	        Same As
=	        x = y	        x = y
+=	        x += y	        x = x + y
-=	        x -= y	        x = x - y
*=	        x *= y	        x = x * y
/=	        x /= y	        x = x / y
%=	        x %= y	        x = x % y
<<=	        x <<= y	        x = x << y
>>=	        x >>= y	        x = x >> y
>>>=	    x >>>= y	    x = x >>> y
&=	        x &= y	        x = x & y
^=	        x ^= y	        x = x ^ y
|=	        x |= y	        x = x | y
**=	        x **= y	        x = x ** y
*/
/*
OBS:A **=operadora faz parte do ECMAScript 2016 .
*/


//Tipos de dados JavaScript

/*
Variáveis ​​JavaScript podem conter muitos tipos de dados : números, strings, objetos e muito mais:
*/

//var length = 16;                               // Number
//var lastName = "Johnson";                      // String
//var x = {firstName:"John", lastName:"Doe"};    // Object

//var x = 16 + "Volvo";//16Volvo
//var x = "Volvo" + 16;//Volvo16
/*
JavaScript avalia expressões da esquerda para a direita. Sequências diferentes podem produzir resultados diferentes:
*/
//var x = 16 + 4 + "Volvo";//20Volvo
//var x = "Volvo" + 16 + 4;//Volvo164

/*
JavaScript possui tipos dinâmicos. Isso significa que a mesma variável pode ser usada para conter diferentes tipos de dados:
*/

//var x;           // Agora x é undefined
//x = 5;           // Agora x é um Number
//x = "John";      // Agora x é uma String

/*
Uma string (ou uma string de texto) é uma série de caracteres como "John Doe".

As string são escritas com aspas. Você pode usar aspas simples ou duplas:
*/

//var carName1 = "Volvo XC60";   // Usando aspas duplas
//var carName2 = 'Volvo XC60';   // Usando aspas simples

/*
Você pode usar aspas dentro de uma string, desde que não correspondam às aspas em torno da string:
*/

//var answer1 = "It's alright"; // Aspas simples entre aspas duplas
//var answer2 = "He is called 'Johnny'";// Aspas simples entre aspas duplas
//var answer3 = 'He is called "Johnny"';// Aspas duplas dentro de aspas simples

/*
JavaScript possui apenas um tipo de número.

Os números podem ser escritos com ou sem decimais:
*/

var x1 = 34.00;     // Escrito com decimais
var x2 = 34;        // Escrito sem decimais

/*
Números muito grandes ou muito pequenos podem ser escritos com notação científica (exponencial):
*/

var y = 123e5;      // 12300000
var z = 123e-5;     // 0.00123

/*
As matrizes de JavaScript são escritas com colchetes.

Os itens da matriz são separados por vírgulas.

O código a seguir declara (cria) uma matriz chamada cars, contendo três itens (nomes de carros):
*/

var cars = ["Saab", "Volvo", "BMW"];

/*
Os índices de matriz são baseados em zero, o que significa que o primeiro item é [0], o segundo é [1] e assim por diante.
*/

/*
Os objetos JavaScript são escritos com chaves {}.

As propriedades do objeto são escritas como pares nome: valor, separados por vírgulas.
*/

var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

/*
O objeto (person) no exemplo acima tem 4 propriedades: firstName, lastName, age e eyeColor.
*/

/*
Você pode usar o operador typeof do JavaScript para encontrar o tipo de uma variável JavaScript.

O typeof operador retorna o tipo de uma variável ou expressão:
*/

typeof ""             // retorna "string"
typeof "John"         // retorna "string"
typeof "John Doe"     // retorna "string"

typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"

/*
Em JavaScript, uma variável sem valor possui o valor undefined. O tipo também é undefined.
*/

var car;    // Valor é undefined, tipo é undefined

/*
Qualquer variável pode ser esvaziada, definindo o valor para undefined. O tipo também será undefined.
*/

car = undefined;    // Valor é undefined, tipo é  undefined

/*
Um valor vazio não tem nada a ver com undefined.

Uma string vazia tem um valor legal e um tipo.
*/

var car = "";    // O valor é "", o typeof é "string"

/*
Em JavaScript null é "nada". Deve ser algo que não existe.

Infelizmente, em JavaScript, o tipo de dados de null é um objeto.
*/

/*
OBS:Você pode considerá-lo um bug em JavaScript que typeof null é um objeto. Deve ser null.
Você pode esvaziar um objeto configurando-o para null:
*/

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null;    // Agora o valor é null, mas o tipo ainda é um object


//Diferença entre undefined e null

typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true

/*
Um valor de dados primitivo é um único valor de dados simples sem propriedades e métodos adicionais.

O typeof operador pode retornar um destes tipos primitivos:
    -string
    -number
    -boolean
    -undefined
*/

/*
O typeof operador pode retornar um de dois tipos complexos:

    .function
    .object
O typeof operador retorna "objeto" para objetos, matrizes e nulo.

O typeofoperador não retorna "objeto" para funções.
*/

typeof {name:'John', age:34} // retorna "object"
typeof [1,2,3,4]             // retorna "object" (não "array", veja a nota abaixo)
typeof null                  // retorna "object"
typeof function myFunc(){}   // retorna "function"

/*
NOTA:O typeof operador retorna " object" para matrizes porque em JavaScript as matrizes são objetos.
*/