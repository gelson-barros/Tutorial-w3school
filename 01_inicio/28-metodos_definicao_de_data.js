//Métodos de definição de data de JavaScript

/*
Os métodos de definição de data permitem definir valores de data (anos, meses, dias, horas, minutos, segundos, milissegundos) para um objeto de data.
*/

//Métodos de definição de data

/*
Os métodos de definição de data são usados ​​para definir uma parte de uma data:

Method	            Description
setDate()	        Set the day as a number (1-31)
setFullYear()	    Set the year (optionally month and day)
setHours()	        Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	    Set the minutes (0-59)
setMonth()	        Set the month (0-11)
setSeconds()	    Set the seconds (0-59)
setTime()	        Set the time (milliseconds since January 1, 1970)
*/

//Método setFullYear ()

/*
O setFullYear()método define o ano de um objeto de data. Neste exemplo, até 2020:
*/

var d = new Date(); d.setFullYear(2020);
document.getElementById("demo").innerHTML = d;

/*
O setFullYear()método pode, opcionalmente, definir o mês e o dia:
*/

var d = new Date();
d.setFullYear(2020, 11, 3);
document.getElementById("demo").innerHTML = d;

//O método setMonth ()

/*
O setMonth()método define o mês de um objeto de data (0-11):
*/

var d = new Date();
d.setMonth(11);
document.getElementById("demo").innerHTML = d;

//O método setDate ()

/*
O setDate()método define o dia de um objeto de data (1-31):
*/

var d = new Date();
d.setDate(15);
document.getElementById("demo").innerHTML = d;

/*
O setDate()método também pode ser usado para adicionar dias a uma data:
*/

var d = new Date();
d.setDate(d.getDate() + 50);
document.getElementById("demo").innerHTML = d;


/*
Se adicionar dias deslocar o mês ou ano, as alterações serão tratadas automaticamente pelo objeto Date.
*/

//Método setHours ()

/*
O setHours()método define as horas de um objeto de data (0-23):
*/

var d = new Date();
d.setHours(22);
document.getElementById("demo").innerHTML = d;

//Método setMinutes ()
/*
O setMinutes()método define os minutos de um objeto de data (0-59):
*/

var d = new Date();
d.setMinutes(30);
document.getElementById("demo").innerHTML = d;

//O método setSeconds ()

/*
O setSeconds()método define os segundos de um objeto de data (0-59):
*/

var d = new Date();
d.setSeconds(30);
document.getElementById("demo").innerHTML = d;

//Comparar datas

/*
As datas podem ser facilmente comparadas.

O exemplo a seguir compara a data de hoje com 14 de janeiro de 2100:
*/

var today, someday, text;
today = new Date();
someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
    text = "Today is before January 14, 2100.";
} else {
    text = "Today is after January 14, 2100.";
}
document.getElementById("demo").innerHTML = text;

/*
JavaScript conta os meses de 0 a 11. Janeiro é 0. Dezembro é 11.
*/