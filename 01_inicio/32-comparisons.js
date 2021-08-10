//Comparação de JavaScript e operadores lógicos

//Operadores de comparação e lógicos são usados ​​para testar trueou false.

/*
Operadores de comparação
Operadores de comparação são usados ​​em declarações lógicas para determinar a igualdade ou diferença entre variáveis ​​ou valores.

Diante disso x = 5, a tabela abaixo explica os operadores de comparação:
*/

/*
Operator	Description	              Comparing	    Returns	
==	         equal to      	           x == 8	     false	
                                       x == 5	     true	
                                       x == "5"	     true	
===	    equal value and equal type	   x === 5	     true	
                                       x === "5"	 false	
!=	          not equal	               x != 8	     true	
!==	not equal value or not equal type  x !== 5	     false	
                                       x !== "5"	 true	
                                       x !== 8	     true	
>	         greater than	           x > 8	     false	
<	           less than	           x < 8	     true	
>=	       greater than or equal to	   x >= 8	     false	
<=	       less than or equal to	   x <= 8	     true
*/

//Como pode ser usado

/*
Operadores de comparação podem ser usados ​​em declarações condicionais para comparar valores e realizar ações dependendo do resultado:
*/

if (age < 18) text = "Too young to buy alcohol";

// Operadores lógicos

/*
Operadores lógicos são usados ​​para determinar a lógica entre variáveis ​​ou valores.

Dado que x = 6e y = 3, a tabela abaixo explica os operadores lógicos:
*/

/*
Operator	 Description	        Example	            
&&	            and	           (x < 10 && y > 1) is true	
||	            or	            (x == 5 || y == 5) is false	
!	            not	             !(x == y) is true
*/
//Operador condicional (ternário)

/*
JavaScript também contém um operador condicional que atribui um valor a uma variável com base em alguma condição.

Sintaxe
variablename = (condition) ? value1:value2 
*/

let voteable = age < 18 ? "Too young" : "Old enough";

/*
Se a variável idade for um valor inferior a 18, o valor da variável votável será "Muito jovem", caso contrário o valor de votável será "Velho o suficiente".
*/

//Comparando Tipos Diferentes

/*
Comparar dados de diferentes tipos pode dar resultados inesperados.

Ao comparar uma string com um número, o JavaScript converterá a string em um número ao fazer a comparação. Uma string vazia é convertida em 0. Uma string não numérica é convertida em NaNque é sempre false.
*/

/*
Case	        Value	
2 < 12	        true	
2 < "12"	    true	
2 < "John"	   false	
2 > "John"	   false	
2 == "John"	   false	
"2" < "12"	   false	
"2" > "12"	    true	
"2" == "12"	    false
*/

/*
Ao comparar duas strings, "2" será maior que "12", porque (alfabeticamente) 1 é menor que 2.

Para garantir um resultado adequado, as variáveis ​​devem ser convertidas para o tipo adequado antes da comparação:
*/

age = Number(age);
if (isNaN(age)) {
    voteable = "Input is not a number";
} else {
    voteable = age < 18 ? "Too young" : "Old enough";
}