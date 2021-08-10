//JavaScript Break and Continue

/*
A breakdeclaração "pula para fora" de um loop.

A continueinstrução "salta" uma iteração do loop.

A declaração de quebra
Você já viu a breakinstrução usada em um capítulo anterior deste tutorial. Foi usado para "saltar" de uma switch()declaração.

A breakinstrução também pode ser usada para sair de um loop:

Exemplo
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
No exemplo acima, a breakinstrução termina o loop ("quebra" o loop) quando o contador de loop (i) é 3.

The Continue Statement
A continueinstrução interrompe uma iteração (no loop), se uma condição especificada ocorrer, e continua com a próxima iteração no loop.

Este exemplo pula o valor de 3:

Exemplo
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
Rótulos de JavaScript
Para rotular as instruções JavaScript, você precede as instruções com um nome de rótulo e dois pontos:

label:
statements
As instruções breake as continuesão as únicas instruções JavaScript que podem "pular para fora" de um bloco de código.

Sintaxe:

break labelname;

continue labelname;
A continue instrução (com ou sem uma referência de rótulo) só pode ser usada para pular uma iteração de loop .

A breakinstrução, sem uma referência de rótulo, só pode ser usada para pular de um loop ou switch .

Com uma referência de rótulo, a instrução break pode ser usada para pular de qualquer bloco de código :

Exemplo
const cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
  text += cars[0] + "<br>";
  text += cars[1] + "<br>";
  break list;
  text += cars[2] + "<br>";
  text += cars[3] + "<br>";
}
Um bloco de código é um bloco de código entre {e}.
*/