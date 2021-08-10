//Booleanos JavaScript

/*
Um Booleano JavaScript representa um de dois valores: verdadeiro ou falso .

Valores Booleanos
Muitas vezes, na programação, você precisará de um tipo de dados que pode ter apenas um de dois valores, como
YES / NO
ON / OFF
TRUE / FALSE
Para isso, o JavaScript possui um tipo de dados booleano . Só pode aceitar os valores verdadeiros ou falsos .
*/

//A função booleana ()
/*
Você pode usar a Boolean()função para descobrir se uma expressão (ou variável) é verdadeira:
*/

Boolean(10 > 9)        // returns true

/*
Ou ainda mais fácil:
*/

(10 > 9)              // also returns true
10 > 9                // also returns true

//Comparações e Condições

/*
O capítulo Comparações JS oferece uma visão geral completa dos operadores de comparação.

O capítulo Condições JS oferece uma visão geral completa das declarações condicionais.

aqui estão alguns exemplos:
*/

/*
Operator	          Description	                 Example
  ==	               equal to	                if (day == "Monday")
  > 	               greater than	            if (salary > 9000)
  <	                    less than	               if (age < 18)
*/

//O valor booleano de uma expressão é a base para todas as comparações e condições de JavaScript.

//Tudo com um "valor" é verdade

100;

3.14 - 15;

("Hello");

("false");

7 + 1 + 3.14;

//Tudo sem um "valor" é falso
//O valor booleano de 0 (zero) é falso :
let x = 0;
Boolean(x);       // returns false


// O valor booleano de -0 (menos zero) é falso :

let x = -0;
Boolean(x);       // returns false

// O valor booleano de "" (string vazia) é falso :
let x = "";
Boolean(x);       // returns false

//O valor booleano de undefined é falso :
let x;
Boolean(x);       // returns false

//O valor booleano de nulo é falso :
let x = null;
Boolean(x);       // returns false

//O valor booleano de false é (você adivinhou) false :
let x = false;
Boolean(x);       // returns false

//Booleanos podem ser objetos

/*
Normalmente, os booleanos JavaScript são valores primitivos criados a partir de literais:

let x = false;

Mas os booleanos também podem ser definidos como objetos com a palavra new- chave :

let y = new Boolean(false);
*/

/*
Não crie objetos booleanos. Isso diminui a velocidade de execução.
A newpalavra-chave complica o código. Isso pode produzir alguns resultados inesperados:
Ao usar o ==operador, booleanos iguais são iguais:
*/

let x = false;             
let y = new Boolean(false);

// (x == y) is true because x and y have equal values

/*
Ao usar o ===operador, booleanos iguais não são iguais, porque o ===operador espera igualdade tanto no tipo quanto no valor.
*/

let x = false;             
let y = new Boolean(false);

// (x === y) is false because x and y have different types

/*
Ou ainda pior. Objetos não podem ser comparados:
*/

let x = new Boolean(false);             
let y = new Boolean(false);

// (x == y) is false because objects cannot be compared

/*
Observe a diferença entre (x == y) e (x === y).
Comparar dois objetos JavaScript sempre retornará falso.
*/