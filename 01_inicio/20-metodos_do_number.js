//Métodos de número JavaScript

/*
Os métodos numéricos ajudam você a trabalhar com números.
*/

//Métodos e propriedades de números

/*
Valores primitivos (como 3.14 ou 2014), não podem ter propriedades e métodos (porque não são objetos).

Mas com JavaScript, métodos e propriedades também estão disponíveis para valores primitivos, porque JavaScript trata os valores primitivos como objetos ao executar métodos e propriedades.
*/


//O método toString ()

/*
O toString()método retorna um número como uma string.

Todos os métodos de número podem ser usados ​​em qualquer tipo de número (literais, variáveis ​​ou expressões):
*/

var x = 123;
x.toString();            // returns 123 from variable x
(123).toString();        // returns 123 from literal 123
(100 + 23).toString();   // returns 123 from expression 100 + 23

//O método toExponential ()

/*
toExponential() retorna uma string, com um número arredondado e escrito em notação exponencial.

Um parâmetro define o número de caracteres atrás do ponto decimal:
*/

var x = 9.656;
x.toExponential(2);     // returns 9.66e+0
x.toExponential(4);     // returns 9.6560e+0
x.toExponential(6);     // returns 9.656000e+0

/*
O parâmetro é opcional. Se você não especificar, o JavaScript não arredondará o número.
*/

//O método toFixed ()

/*
toFixed() retorna uma string, com o número escrito com um número especificado de decimais:
*/

var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000

/*
toFixed(2) é perfeito para trabalhar com dinheiro.
*/

//O método toPrecision ()

/*
toPrecision() retorna uma string, com um número escrito com um comprimento especificado:
*/

var x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656
x.toPrecision(6);       // returns 9.65600

//Método valueOf ()

/*
valueOf() retorna um número como um número.
*/

var x = 123;
x.valueOf();            // returns 123 from variable x
(123).valueOf();        // returns 123 from literal 123
(100 + 23).valueOf();   // returns 123 from expression 100 + 23

/*
Em JavaScript, um número pode ser um valor primitivo (typeof = number) ou um objeto (typeof = object).

O valueOf()método é usado internamente em JavaScript para converter objetos Number em valores primitivos.

Não há razão para usá-lo em seu código.
*/

/*
OBS:Todos os tipos de dados JavaScript têm um valueOf()e um toString()método.
*/

//Convertendo Variáveis ​​em Números

/*
Existem 3 métodos JavaScript que podem ser usados ​​para converter variáveis ​​em números:

    -O Number()método
    -O parseInt()método
    -O parseFloat()método
Esses métodos não são métodos numéricos , mas métodos JavaScript globais .
*/

//Métodos JavaScript globais

/*
Os métodos globais JavaScript podem ser usados ​​em todos os tipos de dados JavaScript.

Estes são os métodos mais relevantes, ao trabalhar com números:
*/

/*
Method	Description
Number()	Returns a number, converted from its argument.
parseFloat()	Parses its argument and returns a floating point number
parseInt()	Parses its argument and returns an integer
*/

//O Método Number ()

/*
Number() pode ser usado para converter variáveis ​​JavaScript em números:
*/

Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN

/*
OBS:Se o número não puder ser convertido, NaN(Não é um número) será retornado.
*/

//O método Number () usado em datas

/*
Number() também pode converter uma data em um número:
*/

Number(new Date("2017-09-30"));    // returns 1506729600000

/*
O Number()método acima retorna o número de milissegundos desde 1.1.1970.
*/

//Método parseInt ()

/*
parseInt()analisa uma string e retorna um número inteiro. Espaços são permitidos. Apenas o primeiro número é retornado:
*/

parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN 

/*
OBS:Se o número não puder ser convertido, NaN(Não é um número) será retornado.
*/

//Método parseFloat ()

/*
parseFloat()analisa uma string e retorna um número. Espaços são permitidos. Apenas o primeiro número é retornado:
*/

parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN

/*
OBS:Se o número não puder ser convertido, NaN(Não é um número) será retornado.
*/

//Propriedades do número

/*
Property	Description
MAX_VALUE	Returns the largest number possible in JavaScript
MIN_VALUE	Returns the smallest number possible in JavaScript
POSITIVE_INFINITY	Represents infinity (returned on overflow)
NEGATIVE_INFINITY	Represents negative infinity (returned on overflow)
NaN	Represents a "Not-a-Number" value
*/


/*
JavaScript MIN_VALUE e MAX_VALUE
MAX_VALUE retorna o maior número possível em JavaScript.
*/

var x = Number.MAX_VALUE;

/*
MIN_VALUE retorna o menor número possível em JavaScript.
*/

var x = Number.MIN_VALUE;

//JavaScript POSITIVE_INFINITY

var x = Number.POSITIVE_INFINITY;

/*
POSITIVE_INFINITY é retornado em estouro:
*/

var x = 1 / 0;

//JavaScript NEGATIVE_INFINITY

var x = Number.NEGATIVE_INFINITY;

/*
NEGATIVE_INFINITY é retornado em estouro:
*/

var x = -1 / 0;

//JavaScript NaN - não é um número

var x = Number.NaN;

/*
NaN é uma palavra reservada de JavaScript que indica que um número não é um número legal.

Tentar fazer aritmética com uma string não numérica resultará em NaN(Não é um número):
*/

var x = 100 / "Apple";  // x will be NaN (Not a Number)

//As propriedades do número não podem ser usadas em variáveis

/*
As propriedades de número pertencem ao wrapper de objeto de número do JavaScript denominado Number .

Essas propriedades só podem ser acessadas como Number.MAX_VALUE.

Usar myNumber .MAX_VALUE, onde myNumber é uma variável, expressão ou valor, retornará undefined:
*/

var x = 6;
var y = x.MAX_VALUE;    // y becomes undefined