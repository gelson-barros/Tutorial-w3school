//Métodos de string JavaScript

/*
Os métodos de string ajudam você a trabalhar com strings.
*/

//Métodos e propriedades de string

/*
Valores primitivos, como "John Doe", não podem ter propriedades ou métodos (porque não são objetos).

Mas com JavaScript, métodos e propriedades também estão disponíveis para valores primitivos, porque JavaScript trata os valores primitivos como objetos ao executar métodos e propriedades.
*/

//String Length (comprimento de string)

/*
A length propriedade retorna o comprimento de uma string:
*/

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;

//Encontrando uma String em uma String

/*
O indexOf()método retorna o índice (a posição da) primeria ocorrência de um texto especificado em uma string:
*/

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");

/*
JavaScript conta posições a partir de zero.
0 é a primeira posição em uma string, 1 é a segunda, 2 é a terceira ...
*/

/*
O lastIndexOf()método retorna o índice da última ocorrência de um texto especificado em uma string:
*/

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");

/*
Ambos indexOf(), e lastIndexOf() retornam -1 se o texto não for encontrado.
*/

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("John");

/*
Ambos os métodos aceitam um segundo parâmetro como a posição inicial para a pesquisa:
*/

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate", 15);

/*
O lastIndexOf()método pesquisa para trás (do final para o início), ou seja: se o segundo parâmetro for 15, a pesquisa começa na posição 15 e pesquisa até o início da string.
*/

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate", 15);

//Procurando por uma string em uma string

/*
O search()método pesquisa uma string para um valor especificado e retorna a posição da correspondência:
*/

var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");

/*
Você percebeu?
Os dois métodos, indexOf()e search(), são iguais?

Eles aceitam os mesmos argumentos (parâmetros) e retornam o mesmo valor?

Os dois métodos NÃO são iguais. Estas são as diferenças:

    -O search()método não pode aceitar um segundo argumento de posição inicial.
    -O indexOf()método não pode aceitar valores de pesquisa poderosos (expressões regulares).
*/

//Extraindo partes da string

/*
Existem 3 métodos para extrair uma parte de uma string:

    -slice(start, end)
    -substring(start, end)
    -substr(start, length)
*/

//O método slice()

/*
slice() extrai uma parte de uma string e retorna a parte extraída em uma nova string.

O método leva 2 parâmetros: a posição inicial e a posição final (final não incluído).

Este exemplo corta uma parte de uma string da posição 7 à posição 12 (13-1):
*/

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);//Banana

/*
Lembre-se: JavaScript conta posições a partir de zero. A primeira posição é 0.

Se um parâmetro for negativo, a posição é contada a partir do final da string.

Este exemplo corta uma parte de uma string da posição -12 para a posição -6:
*/

var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);//Banana

/*
Se você omitir o segundo parâmetro, o método cortará o resto da string:
*/

var res = str.slice(7);

/*
ou, contando a partir do final:
*/

var res = str.slice(-12);

/*
OBS:As posições negativas não funcionam no Internet Explorer 8 e anteriores.
*/

//Método substring()

/*
substring()é semelhante a slice().

A diferença é que substring()não aceita índices negativos.
*/

var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);//Banana

/*
Se você omitir o segundo parâmetro, substring()cortará o resto da string.
*/

//Método substr()

/*
substr()é semelhante a slice().

A diferença é que o segundo parâmetro especifica o comprimento da parte extraída.
*/

var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);//Banana

/*
Se você omitir o segundo parâmetro, substr()cortará o resto da string.
*/

var str = "Apple, Banana, Kiwi";
var res = str.substr(7);//Banana, Kiwi

/*
Se o primeiro parâmetro for negativo, a posição conta a partir do final da string.

Exemplo
*/

var str = "Apple, Banana, Kiwi";
var res = str.substr(-4);//Kiwi

//Substituição do conteúdo da string

/*
O replace() método substitui um valor especificado por outro valor em uma string:
*/

str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");

/*
O replace()método não altera a string em que é chamado. Ele retorna uma nova string.

Por padrão, o replace()método substitui apenas a primeira correspondência:
*/

str = "Please visit Microsoft and Microsoft!";
var n = str.replace("Microsoft", "W3Schools");

/*
Por padrão, o replace()método diferencia maiúsculas de minúsculas. Escrever MICROSOFT (com maiúsculas) não funcionará:
*/

str = "Please visit Microsoft!";
var n = str.replace("MICROSOFT", "W3Schools");

/*
Para substituir não diferencia maiúsculas de minúsculas, use uma expressão regular com um /isinalizador (insensível):
*/

str = "Please visit Microsoft!";
var n = str.replace(/MICROSOFT/i, "W3Schools");

/*
Observe que as expressões regulares são escritas sem aspas.
Para substituir todas as correspondências, use uma expressão regular com um /gsinalizador (correspondência global):
*/

str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");

//Convertendo para maiúsculas e minúsculas

/*
Uma string é convertida em maiúsculas com toUpperCase():
*/

var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();  // text2 is text1 converted to upper

/*
Uma string é convertida para minúsculas com toLowerCase():
*/

//O método concat ()

/*
concat() junta duas ou mais strings:
*/

var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);

/*
O concat()método pode ser usado em vez do operador mais. Essas duas linhas fazem o mesmo:
*/

var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!");

/*
Todos os métodos de string retornam uma nova string. Eles não modificam a string original.
Disse formalmente: Strings são imutáveis: Strings não podem ser alteradas, apenas substituídas.
*/

//String.trim ()

/*
O trim()método remove os espaços em branco de ambos os lados de uma string:
*/

var str = "       Hello World!        ";
alert(str.trim());

/*
OBS:O trim()método não é compatível com o Internet Explorer 8 ou inferior.
Se você precisar oferecer suporte ao IE 8, poderá usar replace()com uma expressão regular:
*/

var str = "       Hello World!        ";
alert(str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""));

/*
Você também pode usar a solução de substituição acima para adicionar uma função de corte ao JavaScript String.prototype:
*/

if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    };
}
var str = "       Hello World!        ";
alert(str.trim());

//Preenchimento de string JavaScript

/*
ECMAScript 2017 adicionou dois métodos String: padStart e padEndpara suportar preenchimento no início e no final de uma string.
*/

let str = "5";
str = str.padStart(4,0);
// result is 0005

let str = "5";
str = str.padEnd(4,0);
// result is 5000

/*
O preenchimento de strings não é compatível com o Internet Explorer.

Firefox e Safari foram os primeiros navegadores com suporte para preenchimento de string JavaScript:

Chrome 57	Edge 15	Firefox 48	Safari 10	Opera 44
Mar 2017	Apr 2017	Aug 2016	Sep 2016	Mar 2017
*/

//Extração de caracteres de string

/*
Existem 3 métodos para extrair caracteres de string:
    -charAt(position)
    -charCodeAt(position)
    -Acesso à propriedade []
*/

//O método charAt ()

/*
O charAt()método retorna o caractere em um índice especificado (posição) em uma string:
*/

var str = "HELLO WORLD";
str.charAt(0);            // returns H

//O método charCodeAt ()

/*
O charCodeAt()método retorna o unicode do caractere em um índice especificado em uma string:

O método retorna um código UTF-16 (um número inteiro entre 0 e 65535).
*/

var str = "HELLO WORLD";

str.charCodeAt(0);         // returns 72

//Acesso à Propriedade

/*
ECMAScript 5 (2009) permite acesso de propriedade [] em strings:
*/

var str = "HELLO WORLD";
str[0];                   // returns H


/*
OBS:
O acesso à propriedade pode ser um pouco imprevisível:

Não funciona no Internet Explorer 7 ou anterior
Faz com que as strings pareçam arrays (mas não são)
Se nenhum caractere for encontrado, [] retorna undefined, enquanto charAt () retorna uma string vazia.
É somente leitura. str [0] = "A" não dá erro (mas não funciona!)
*/

/*
var str = "HELLO WORLD";
str[0] = "A";             // Gives no error, but does not work
str[0];                   // returns H
*/

/*
Se você quiser trabalhar com uma string como uma matriz, poderá convertê-la em uma matriz.
*/

//Convertendo uma String em uma Matriz

/*
Uma string pode ser convertida em uma matriz com o split()método:
*/

var txt = "a,b,c,d,e";   // String
txt.split(",");          // dividir em vírgulas
txt.split(" ");          // dividir em espaço
txt.split("|");          // dividir em pipe

/*
Se o separador for omitido, a matriz retornada conterá toda a string no índice [0].

Se o separador for "", a matriz retornada será uma matriz de caracteres únicos:
*/

var txt = "Hello";       // String
txt.split("");           // Split in characters