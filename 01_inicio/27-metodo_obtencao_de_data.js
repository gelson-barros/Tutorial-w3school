//Métodos de obtenção de data em JavaScript

/*
Esses métodos podem ser usados ​​para obter informações de um objeto de data:

Method	            Description
getFullYear()	    Obtenha o ano como um número de quatro dígitos (yyyy)
getMonth()	        Obtenha o mês como um número (0-11)
getDate()	        Obtenha o dia como um número (1-31)
getHours()	        Obtenha a hora (0-23)
getMinutes()	    Obtenha o minuto (0-59)
getSeconds()	    Obtenha o segundo (0-59)
getMilliseconds()	Obtenha o millisegundo (0-999)
getTime()	        Obtenha o tempo (milissegundos desde 1º de janeiro de 1970)
getDay()	        Obtenha o dia da semana como um número (0-6)
Date.now()	        Obtenha o tempo. ECMAScript 5.
*/

//Método getTime ()

/*
O getTime()método retorna o número de milissegundos desde 1º de janeiro de 1970:
*/

var d = new Date();
document.getElementById("demo").innerHTML = d.getTime();

//Método getFullYear ()

/*
O getFullYear()método retorna o ano de uma data como um número de quatro dígitos:
*/

var d = new Date();
document.getElementById("demo").innerHTML = d.getFullYear();

//O método getMonth ()

/*
O getMonth()método retorna o mês de uma data como um número (0-11):
*/

var d = new Date();
document.getElementById("demo").innerHTML = d.getMonth();

/*
Em JavaScript, o primeiro mês (janeiro) é o mês número 0, então dezembro retorna o mês número 11.

Você pode usar uma matriz de nomes e getMonth()retornar o mês como um nome:
*/

var d = new Date();
var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
document.getElementById("demo").innerHTML = months[d.getMonth()];

//Método getDate ()

/*
O getDate()método retorna o dia de uma data como um número (1-31):
*/

var d = new Date();
document.getElementById("demo").innerHTML = d.getDate();

//Método getHours ()

/*
O getHours()método retorna as horas de uma data como um número (0-23):
*/

var d = new Date();
document.getElementById("demo").innerHTML = d.getHours();

//Método getMinutes ()

/*
O getMinutes()método retorna os minutos de uma data como um número (0-59):
*/

var d = new Date();
document.getElementById("demo").innerHTML = d.getMinutes();

//Método getSeconds ()

/*
O getSeconds()método retorna os segundos de uma data como um número (0-59):
*/

var d = new Date();
document.getElementById("demo").innerHTML = d.getSeconds();

//Método getMilliseconds ()

/*
O getMilliseconds()método retorna os milissegundos de uma data como um número (0-999):
*/

var d = new Date();
document.getElementById("demo").innerHTML = d.getMilliseconds();

//Método getDay ()

/*
O getDay()método retorna o dia da semana de uma data como um número (0-6):
*/

var d = new Date();
document.getElementById("demo").innerHTML = d.getDay();

/*
Em JavaScript, o primeiro dia da semana (0) significa "domingo", mesmo que alguns países do mundo considerem o primeiro dia da semana como "segunda-feira"

Você pode usar uma matriz de nomes e getDay()retornar o dia da semana como um nome:
*/

var d = new Date();
var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
document.getElementById("demo").innerHTML = days[d.getDay()];

//Métodos de data UTC

/*
Os métodos de data UTC são usados ​​para trabalhar com datas UTC (datas do fuso horário universal):
*/

/*
Method	                Description
getUTCDate()	        Same as getDate(), but returns the UTC date
getUTCDay()	            Same as getDay(), but returns the UTC day
getUTCFullYear()	    Same as getFullYear(), but returns the UTC year
getUTCHours()	        Same as getHours(), but returns the UTC hour
getUTCMilliseconds()	Same as getMilliseconds(), but returns the UTC milliseconds
getUTCMinutes()	        Same as getMinutes(), but returns the UTC minutes
getUTCMonth()	        Same as getMonth(), but returns the UTC month
getUTCSeconds()	        Same as getSeconds(), but returns the UTC seconds
*/