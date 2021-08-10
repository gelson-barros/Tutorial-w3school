//Aritmética JavaScript

//Operadores aritméticos JavaScript

/*
Os operadores aritméticos realizam operações aritméticas em números (literais ou variáveis).
*/

/*
Operator	Description
+	        Addition
-	        Subtraction
*	        Multiplication
**	        Exponentiation (ES2016)
/	        Division
%	        Modulus (Remainder)
++	        Increment
--	        Decrement
*/

//Operaçoes aritimeticas

/*
Uma operação aritmética típica opera em dois números.

Os dois números podem ser literais:
*/

var x = 100 + 50;

/*
ou variáveis:
*/

var x = a + b;

/*
ou expressões:
*/

var x = (100 + 50) * a;

//Operadores e operandos

/*
Os números (em uma operação aritmética) são chamados de operandos .

A operação (a ser realizada entre os dois operandos) é definida por um operador .
*/

/*
Operando	Operador	Operando
100	           +	      50
*/

//Adicionando

/*
O operador de adição ( +) adiciona números:
*/

var x = 5;
var y = 2;
var z = x + y;

//Subtraindo

/*
O operador de subtração ( -) subtrai números.
*/

var x = 5;
var y = 2;
var z = x - y;

//Multiplicando

/*
O operador de multiplicação ( *) multiplica números.
*/

var x = 5;
var y = 2;
var z = x * y;

//Dividindo

/*
O operador de divisão ( /) divide os números.
*/

var x = 5;
var y = 2;
var z = x / y;

//Restante

/*
O operador de módulo ( %) retorna o resto da divisão.
*/

var x = 5;
var y = 2;
var z = x % y;

/*
OBS:
Na aritmética, a divisão de dois inteiros produz um quociente e um resto .

Em matemática, o resultado de uma operação de módulo é o resto de uma divisão aritmética.
*/

//Incrementando

/*
O operador de incremento ( ++) incrementa os números.
*/

var x = 5;
x++;
var z = x;

//Decrementar

/*
O operador de decremento ( --) diminui os números.
*/

var x = 5;
x--;
var z = x;

//Exponenciação

/*
O operador de exponenciação ( **) eleva o primeiro operando à potência do segundo operando.
*/

var x = 5;
var z = x ** 2;          // result is 25

//x ** y produz o mesmo resultado que Math.pow(x,y):

var x = 5;
var z = Math.pow(x,2);   // result is 25

//operador precedente

/*
A precedência do operador descreve a ordem em que as operações são realizadas em uma expressão aritmética.
*/

var x = 100 + 50 * 3;

/*
O resultado do exemplo acima é igual a 150 * 3 ou igual a 100 + 150?

A adição ou multiplicação é feita primeiro?

Como na matemática escolar tradicional, a multiplicação é feita primeiro.

Multiplicação ( *) e divisão ( /) têm precedência mais alta do que adição ( +) e subtração ( -).

E (como na matemática escolar) a precedência pode ser alterada usando parênteses:
*/

var x = (100 + 50) * 3;

/*
Ao usar parênteses, as operações dentro dos parênteses são calculadas primeiro.

Quando muitas operações têm a mesma precedência (como adição e subtração), elas são calculadas da esquerda para a direita:
*/

var x = 100 + 50 - 3;

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