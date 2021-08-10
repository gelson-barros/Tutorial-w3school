//Objetos de data JavaScript

/*
JavaScript Date Object nos permite trabalhar com datas:
*/

/*
Sexta, 28 de maio de 2021 13:47:43 GMT + 0100 (Hora Padrão da África Ocidental)
*/


var d = new Date();

/*
Saída de data JavaScript
Por padrão, o JavaScript usará o fuso horário do navegador e exibirá uma data como uma string de texto completo:

Sexta, 28 de maio de 2021 13:47:43 GMT + 0100 (Hora Padrão da África Ocidental)
*/

//Criação de objetos de data

/*
Objetos de data são criados com o new Date()construtor.

Existem 4 maneiras de criar um novo objeto de data:
*/

//new Date()
//new Date(year, month, day, hours, minutes, seconds, milliseconds)
//new Date(milliseconds)
//new Date(date string)

//new Date()

/*
new Date()cria um novo objeto de data com a data e hora atuais :
*/

var d = new Date();

/*
OBS:Objetos de data são estáticos. A hora do computador está passando, mas os objetos de data não.
*/


//new Date(year, month, ...)

/*
new Date(year, month, ...)cria um novo objeto de data com uma data e hora especificadas .

7 números especificam ano, mês, dia, hora, minuto, segundo e milissegundo (nessa ordem):
*/

var d = new Date(2018, 11, 24, 10, 33, 30, 0);

/*
Nota: JavaScript conta meses de 0 a 11.

Janeiro é 0. Dezembro é 11.
*/

/*
6 números especificam ano, mês, dia, hora, minuto, segundo:
*/

var d = new Date(2018, 11, 24, 10, 33, 30);

/*
5 números especificam ano, mês, dia, hora e minuto:
*/

var d = new Date(2018, 11, 24, 10, 33);

/*
4 números especificam ano, mês, dia e hora:
*/

var d = new Date(2018, 11, 24, 10);

/*
3 números especificam ano, mês e dia:
*/

var d = new Date(2018, 11, 24);

/*
2 números especificam ano e mês:
*/

var d = new Date(2018, 11);

/*
Você não pode omitir o mês. Se você fornecer apenas um parâmetro, ele será tratado como milissegundos.
*/

var d = new Date(2018);

//Século Anterior

/*
Anos de um e dois dígitos serão interpretados como 19xx:
*/

var d = new Date(99, 11, 24);

var d = new Date(9, 11, 24);

//new Date(dateString)

/*
new Date(dateString)cria um novo objeto de data a partir de uma string de data :
*/

var d = new Date("October 13, 2014 11:13:00");

//JavaScript armazena datas em milissegundos

/*
JavaScript armazena datas como um número de milissegundos desde 01 de janeiro de 1970, 00:00:00 UTC (Universal Time Coordinated).
*/

/*
A hora zero é 01 de janeiro de 1970 00:00:00 UTC.
*/

/*
Agora, a hora é: 1622206063328 milissegundos após 01 de janeiro de 1970
*/

//new Date(milliseconds)

/*
new Date(milliseconds)cria um novo objeto de data como tempo zero mais milissegundos :
*/

var d = new Date(0);

/*
01 de janeiro de 1970 mais 100.000.000.000 milissegundos é aproximadamente 03 de março de 1973:
*/

var d = new Date(100000000000);

/*
01 de janeiro de 1970 menos 100.000.000.000 milissegundos é aproximadamente 31 de outubro de 1966:
*/

var d = new Date(-100000000000);

var d = new Date(86400000);

/*
Um dia (24 horas) equivale a 86.400.000 milissegundos.
*/

//Métodos de Data

/*
Quando um objeto Date é criado, vários métodos permitem que você opere nele.

Os métodos de data permitem obter e definir o ano, mês, dia, hora, minuto, segundo e milissegundo de objetos de data, usando a hora local ou a hora UTC (universal ou GMT).
*/

//Exibindo datas

/*
JavaScript irá (por padrão) produzir datas em formato de string de texto completo:
*/

/*
Wed Mar 25 2015 01:00:00 GMT+0100 (Hora padrão da África Ocidental)
*/

/*
Quando você exibe um objeto de data em HTML, ele é automaticamente convertido em uma string, com o toString()método.
*/

d = new Date();
document.getElementById("demo").innerHTML = d;

d = new Date();
document.getElementById("demo").innerHTML = d.toString();

/*
O toUTCString()método converte uma data em uma string UTC (um padrão de exibição de data).
*/

var d = new Date();
document.getElementById("demo").innerHTML = d.toUTCString();

/*
O toDateString()método converte uma data em um formato mais legível:
*/

var d = new Date();
document.getElementById("demo").innerHTML = d.toDateString();

/*
O toISOString()método converte uma data em uma string, usando o formato padrão ISO:
*/

var d = new Date();
document.getElementById("demo").innerHTML = d.toISOString();