//Objetos JavaScript

//Objetos, propriedades e métodos da vida real

/*
Na vida real, um carro é um objeto .

Um carro tem propriedades como peso e cor, e métodos como start e stop:
*/

/*
Propriedades	
	
car.name = Fiat

car.model = 500

car.weight = 850kg

car.color = white

Métodos

carro.start ()

carro.drive ()

carro.brake ()

carro.stop ()
*/

/*
Todos os carros têm as mesmas propriedades , mas os valores das propriedades diferem de carro para carro.

Todos os carros têm os mesmos métodos , mas os métodos são executados em momentos diferentes .

*/

//Objetos JavaScript

/*
Você já aprendeu que as variáveis ​​JavaScript são contêineres para valores de dados.

Este código atribui um valor simples (Fiat) a uma variável chamada carro:
*/

var car = "Fiat";

/*
Os objetos também são variáveis. Mas os objetos podem conter muitos valores.

Este código atribui muitos valores (Fiat, 500, branco) a uma variável chamada carro:
*/

var car = { type: "Fiat", model: "500", color: "white" };

/*
Os valores são escritos como pares nome: valor (nome e valor separados por dois pontos).
*/

/*
OBS:Objetos JavaScript são contêineres para valores nomeados chamados propriedades ou métodos.
*/

//Definição de Objeto

/*
Você define (e cria) um objeto JavaScript com um literal de objeto:
*/

var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

/*
Espaços e quebras de linha não são importantes. Uma definição de objeto pode abranger várias linhas:
*/

var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
};

//Propriedades do objeto

/*
Os pares nome: valores em objetos JavaScript são chamados de propriedades :
*/

/*
Propriedade	Valor da propriedade
firstName	John
lastName	Doe
age	        50
eyeColor	blue
*/

//Acessando Propriedades do Objeto

/*
Você pode acessar as propriedades do objeto de duas maneiras:
*/

//objectName.propertyName;
//ou
//objectName["propertyName"];

person.lastName;

person["lastName"];

//Métodos de Objeto

/*
Os objetos também podem ter métodos .

Métodos são ações que podem ser executadas em objetos.

Os métodos são armazenados nas propriedades como definições de funções
*/

/*
Property	Property Value
firstName	John
lastName	Doe
age	50
eyeColor	blue
fullName	function() {return this.firstName + " " + this.lastName;}
OBS:Um método é uma função armazenada como uma propriedade.
*/

var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
};

//A palavra-chave this

/*
Em uma definição de função, this refere-se ao "proprietário" da função.

No exemplo acima, this é o objeto pessoa que "possui" a fullName função.

Em outras palavras, this.firstNamesignifica firstNamepropriedade deste objeto .

Leia mais sobre a this palavra-chave em JS esta palavra- chave .
*/

//Acessando métodos de objeto

/*
Você acessa um método de objeto com a seguinte sintaxe:
objectName.methodName()
*/

name = person.fullName();

/*
Se você acessar um método sem os parênteses (), ele retornará a definição da função :
*/

name = person.fullName;

//Não declare strings, números e booleanos como objetos!

/*
Quando uma variável JavaScript é declarada com a palavra-chave " new", a variável é criada como um objeto:
*/

var x = new String();        // Declara x como um objeto String
var y = new Number();        // Declara x como um objeto Number
var z = new Boolean();       // Declara x como um objeto Boolean

/*
Evite String, Number, e Boolean objetos. Eles complicam seu código e reduzem a velocidade de execução.
*/