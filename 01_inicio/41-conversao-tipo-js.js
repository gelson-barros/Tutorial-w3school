//Conversão de tipo de JavaScript

/*
Convertendo Strings em Números
Convertendo Números em Strings
Conversão de datas em números
Convertendo Números em Datas
Convertendo Booleanos em Números
Convertendo Números em Booleanos
*/

/*

Conversão de tipo de JavaScript
Variáveis ​​JavaScript podem ser convertidas em uma nova variável e outro tipo de dados:

Pelo uso de uma função JavaScript
Automaticamente pelo próprio JavaScript
Convertendo Strings em Números
O método global Number()pode converter strings em números.

Strings contendo números (como "3,14") são convertidos em números (como 3,14).

Strings vazias são convertidas em 0.

Qualquer outra coisa se converte em NaN(não um número).

Number("3.14")    // returns 3.14
Number(" ")       // returns 0
Number("")        // returns 0
Number("99 88")   // returns NaN
Métodos Numéricos
No capítulo Métodos de número , você encontrará mais métodos que podem ser usados ​​para converter strings em números:

Method	Description
Number()	Returns a number, converted from its argument
parseFloat()	Parses a string and returns a floating point number
parseInt()	Parses a string and returns an integer
O Unário + Operador
O operador unário + pode ser usado para converter uma variável em um número:

Exemplo
let y = "5";      // y is a string
let x = + y;      // x is a number
Se a variável não puder ser convertida, ainda se tornará um número, mas com o valor NaN (Not a Number):

Exemplo
let y = "John";   // y is a string
let x = + y;      // x is a number (NaN)
PROPAGANDA	
Convertendo Números em Strings
O método global String()pode converter números em strings.

Ele pode ser usado em qualquer tipo de número, literal, variável ou expressão:

Exemplo
String(x)         // returns a string from a number variable x
String(123)       // returns a string from a number literal 123
String(100 + 23)  // returns a string from a number from an expression
O método Number toString()faz o mesmo.

Exemplo
x.toString()
(123).toString()
(100 + 23).toString()
Mais Métodos
No capítulo Métodos de números , você encontrará mais métodos que podem ser usados ​​para converter números em strings:

Method	Description
toExponential()	Returns a string, with a number rounded and written using exponential notation.
toFixed()	Returns a string, with a number rounded and written with a specified number of decimals.
toPrecision()	Returns a string, with a number written with a specified length
Conversão de datas em números
O método global Number()pode ser usado para converter datas em números.

d = new Date();
Number(d)          // returns 1404568027739
O método de data getTime() faz o mesmo.

d = new Date();
d.getTime()        // returns 1404568027739
Conversão de datas em strings
O método global String()pode converter datas em strings.

String(Date())  // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"
O método Date toString()faz o mesmo.

Exemplo
Date().toString()  // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"
No capítulo Métodos de data , você encontrará mais métodos que podem ser usados ​​para converter datas em strings:

Method	Description
getDate()	Get the day as a number (1-31)
getDay()	Get the weekday a number (0-6)
getFullYear()	Get the four digit year (yyyy)
getHours()	Get the hour (0-23)
getMilliseconds()	Get the milliseconds (0-999)
getMinutes()	Get the minutes (0-59)
getMonth()	Get the month (0-11)
getSeconds()	Get the seconds (0-59)
getTime()	Get the time (milliseconds since January 1, 1970)
Convertendo Booleanos em Números
O método global Number()também pode converter booleanos em números.

Number(false)     // returns 0
Number(true)      // returns 1
Convertendo Booleanos em Strings
O método global String()pode converter booleanos em strings.

String(false)      // returns "false"
String(true)       // returns "true"
O método booleano toString()faz o mesmo.

false.toString()   // returns "false"
true.toString()    // returns "true"
Conversão Automática de Tipo
Quando o JavaScript tenta operar em um tipo de dados "errado", ele tenta converter o valor em um tipo "certo".

O resultado nem sempre é o que você espera:

5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2
Conversão Automática de String
JavaScript chama automaticamente a toString()função da variável quando você tenta "produzir" um objeto ou uma variável:

document.getElementById("demo").innerHTML = myVar;

// if myVar = {name:"Fjohn"}  // toString converts to "[object Object]"
// if myVar = [1,2,3,4]       // toString converts to "1,2,3,4"
// if myVar = new Date()      // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"
Números e booleanos também são convertidos, mas isso não é muito visível:

// if myVar = 123             // toString converts to "123"
// if myVar = true            // toString converts to "true"
// if myVar = false           // toString converts to "false"
Tabela de conversão de tipo de JavaScript
Esta tabela mostra o resultado da conversão de diferentes valores de JavaScript em Number, String e Boolean:

Original
Value	Converted
to Number	Converted
to String	Converted
to Boolean	Try it
false	0	"false"	false	
true	1	"true"	true	
0	0	"0"	false	
1	1	"1"	true	
"0"	0	"0"	true	
"000"	0	"000"	true	
"1"	1	"1"	true	
NaN	NaN	"NaN"	false	
Infinity	Infinity	"Infinity"	true	
-Infinity	-Infinity	"-Infinity"	true	
""	0	""	false	
"20"	20	"20"	true	
"twenty"	NaN	"twenty"	true	
[ ]	0	""	true	
[20]	20	"20"	true	
[10,20]	NaN	"10,20"	true	
["twenty"]	NaN	"twenty"	true	
["ten","twenty"]	NaN	"ten,twenty"	true	
function(){}	NaN	"function(){}"	true	
{ }	NaN	"[object Object]"	true	
null	0	"null"	false	
undefined	NaN	"undefined"	false	
Os valores entre aspas indicam valores de string.

Os valores vermelhos indicam valores (alguns) que os programadores podem não esperar.
*/