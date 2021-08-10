//Operadores de JavaScript

/*
Atribua valores a variáveis ​​e os some:
*/

var x = 5;         // atribua o valor 5 a x
var y = 2;         // atribua o valor 2 a y
var z = x + y;     // atribua o valor 7 a z (5 + 2)

/*
O operador de atribuição ( =) atribui um valor a uma variável.
*/

var x = 10;

/*
O operador de adição ( +) adiciona números:
*/

var x = 5;
var y = 2;
var z = x + y;

/*
O operador de multiplicação ( *) multiplica números.
*/

var x = 5;
var y = 2;
var z = x * y;

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

//OBS: Os operadores aritméticos são totalmente descritos no capítulo JS Aritmética

//Operadores de atribuição de JavaScript

/*
Os operadores de atribuição atribuem valores a variáveis ​​JavaScript.
*/

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

/*
O operador de atribuição de adição ( +=) adiciona um valor a uma variável.
*/

var x = 10;
x += 5;

//OBS: Os operadores de atribuição são totalmente descritos no capítulo Atribuição de JS .

//Operadores de string JavaScript

/*
O +operador também pode ser usado para adicionar (concatenar) strings.
*/

var txt1 = "John";
var txt2 = "Doe";
var txt3 = txt1 + " " + txt2;
/*
O resultado do txt3 será: John Doe
*/

/*
O += operador de atribuição também pode ser usado para adicionar (concatenar) strings:
*/

var txt1 = "What a very ";
txt1 += "nice day";//O resultado de txt1 será:What a very nice day

/*
OBS:Quando usado em strings, o operador + é chamado de operador de concatenação.
*/

//Adicionando Strings e Números

/*
Adicionar dois números retornará a soma, mas adicionar um número e uma string retornará uma string:
*/

var x = 5 + 5;//10
var y = "5" + 5;//55
var z = "Hello" + 5;//Hello5

/*
OBS:Se você adicionar um número e uma string, o resultado será uma string!
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

//OBS:Os operadores de tipo são totalmente descritos no capítulo Conversão de tipo JS .

//Operadores JavaScript bit a bit

/*
Os operadores de bits funcionam com números de 32 bits.

Qualquer operando numérico na operação é convertido em um número de 32 bits. O resultado é convertido de volta para um número JavaScript.
*/

/*
Operator	Description	            Example	  Igual a	    Resultado   Decimal
&	        AND	                    5 & 1	  0101 & 0001	0001	    1
|	        OR	                    5 | 1	  0101 | 0001	0101	    5
~	        NOT	                    ~ 5	      ~0101	      -1010+0101   -6
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