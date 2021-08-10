//JavaScript Random

//Math.random ()

/*
Math.random() retorna um número aleatório entre 0 (inclusivo) e 1 (exclusivo):
*/

// Returns a random number:
Math.random();

Math.random() // sempre retorna um número menor que 1.

/*
Inteiros aleatórios de JavaScript
Math.random()usado com Math.floor()pode ser usado para retornar inteiros aleatórios.

Não existem números inteiros em JavaScript.

Estamos falando de números sem decimais aqui.
*/

// Returns a random integer from 0 to 9:
Math.floor(Math.random() * 10);

// Returns a random integer from 0 to 10:
Math.floor(Math.random() * 11);

// Returns a random integer from 0 to 99:
Math.floor(Math.random() * 100);

// Returns a random integer from 0 to 100:
Math.floor(Math.random() * 101);

// Returns a random integer from 1 to 10:
Math.floor(Math.random() * 10) + 1;

// Returns a random integer from 1 to 100:
Math.floor(Math.random() * 100) + 1;

//Uma Função Aleatória Adequada

/*
Como você pode ver nos exemplos acima, pode ser uma boa ideia criar uma função aleatória apropriada para usar para todos os propósitos de inteiros aleatórios.

Esta função JavaScript sempre retorna um número aleatório entre min (incluído) e max (excluído):
*/

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
/*
Esta função JavaScript sempre retorna um número aleatório entre mínimo e máximo (ambos incluídos):
*/

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}