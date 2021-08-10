//Formatos de data JavaScript

//Entrada de data JavaScript

/*
Geralmente, existem três tipos de formatos de entrada de data JavaScript:

Modelo	            Exemplo
Data ISO	        "2015-03-25" (o padrão internacional)
Encontro curto	    "25/03/2015"
Data Longa	        "25 de março de 2015" ou "25 de março de 2015"
*/

/*
O formato ISO segue um padrão estrito em JavaScript.

Os outros formatos não são tão bem definidos e podem ser específicos do navegador.
*/

//Saída de data JavaScript

/*
Independentemente do formato de entrada, o JavaScript irá (por padrão) produzir datas no formato de string de texto completo:

Wed Mar 25 2015 01:00:00 GMT+0100 (Hora padrão da África Ocidental)
*/

//Datas ISO de JavaScript

/*
ISO 8601 é o padrão internacional para representação de datas e horas.

A sintaxe ISO 8601 (AAAA-MM-DD) também é o formato de data JavaScript preferido:
*/

//Exemplo (data completa)
var d = new Date("2015-03-25");

/*
A data calculada será relativa ao seu fuso horário.
Dependendo do seu fuso horário, o resultado acima irá variar entre 24 e 25 de março.
*/

//Datas ISO (ano e mês)

/*
As datas ISO podem ser escritas sem especificar o dia (AAAA-MM):
*/

var d = new Date("2015-03");

/*
Os fusos horários irão variar o resultado acima entre 28 de fevereiro e 01 de março
*/

//Datas ISO (apenas ano)

/*
As datas ISO podem ser escritas sem mês e dia (AAAA):
*/

var d = new Date("2015");

/*
Os fusos horários irão variar o resultado acima entre 31 de dezembro de 2014 e 01 de janeiro de 2015.
*/

//Datas ISO (data-hora)

/*
As datas ISO podem ser gravadas com horas, minutos e segundos adicionados (AAAA-MM-DDTHH: MM: SSZ):
*/

var d = new Date("2015-03-25T12:00:00Z");

/*
A data e a hora são separadas por T maiúsculo.

A hora UTC é definida com uma letra maiúscula Z.

Se você quiser modificar a hora em relação ao UTC, remova o Z e adicione + HH: MM ou -HH: MM em vez disso:
*/

var d = new Date("2015-03-25T12:00:00-06:30");

/*
UTC (Universal Time Coordinated) é igual ao GMT (Horário de Greenwich).

A omissão de T ou Z em uma string de data e hora pode fornecer resultados diferentes em navegadores diferentes.
*/

//Fusos horários

/*
Ao definir uma data, sem especificar o fuso horário, o JavaScript usará o fuso horário do navegador.

Ao obter uma data, sem especificar o fuso horário, o resultado é convertido para o fuso horário do navegador.

Em outras palavras: Se uma data / hora for criada em GMT (Greenwich Mean Time), a data / hora será convertida para CDT (Central US Daylight Time) se um usuário navegar da região central dos EUA.
*/

//Datas curtas em JavaScript.

/*
Datas curtas são escritas com uma sintaxe "MM / DD / AAAA" como esta:
*/

var d = new Date("03/25/2015");

//AVISOS!

/*
Em alguns navegadores, meses ou dias sem zeros à esquerda podem produzir um erro:
*/

var d = new Date("2015-3-25");

/*
O comportamento de "AAAA / MM / DD" é indefinido.
Alguns navegadores tentarão adivinhar o formato. Alguns retornarão NaN.
*/

var d = new Date("2015/03/25");

/*
O comportamento de "DD-MM-AAAA" também é indefinido.
Alguns navegadores tentarão adivinhar o formato. Alguns retornarão NaN.
*/

var d = new Date("25-03-2015");

//Datas longas em JavaScript.

/*
Datas longas são geralmente escritas com uma sintaxe "MMM DD AAAA" como esta:
*/

var d = new Date("Mar 25 2015");

/*
O mês e o dia podem estar em qualquer ordem:
*/

var d = new Date("25 Mar 2015");

/*
E o mês pode ser escrito por extenso (janeiro) ou abreviado (janeiro):
*/

var d = new Date("January 25 2015");


var d = new Date("Jan 25 2015");

/*
As vírgulas são ignoradas. Os nomes não diferenciam maiúsculas de minúsculas:
*/

var d = new Date("JANUARY, 25, 2015");

//Entrada de data - datas de análise

/*
Se você tiver uma string de data válida, pode usar o Date.parse()método para convertê-la em milissegundos.

Date.parse() retorna o número de milissegundos entre a data e 1º de janeiro de 1970:
*/

var msec = Date.parse("March 21, 2012");
document.getElementById("demo").innerHTML = msec;

/*
Você pode então usar o número de milissegundos para convertê-lo em um objeto de data :
*/

var msec = Date.parse("March 21, 2012");
var d = new Date(msec);
document.getElementById("demo").innerHTML = d;