//Eventos JavaScript

/*
Os eventos HTML são "coisas" que acontecem aos elementos HTML.

Quando o JavaScript é usado em páginas HTML, o JavaScript pode "reagir" a esses eventos.
*/

//Eventos HTML

/*
Um evento HTML pode ser algo que o navegador faz ou que um usuário faz.

Aqui estão alguns exemplos de eventos HTML:

Uma página da web em HTML terminou de carregar
Um campo de entrada HTML foi alterado
Um botão HTML foi clicado
Freqüentemente, quando os eventos acontecem, você pode querer fazer algo.

JavaScript permite que você execute código quando eventos são detectados.

HTML permite que atributos de manipulador de eventos, com código JavaScript , sejam adicionados a elementos HTML.

Com aspas simples:
<element event='some JavaScript'>

Com aspas duplas:
<element event="some JavaScript">

No exemplo a seguir, um onclick atributo (com código) é adicionado a um <button>elemento:

<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>

No exemplo acima, o código JavaScript altera o conteúdo do elemento com id = "demo".

No próximo exemplo, o código altera o conteúdo de seu próprio elemento (usando this.innerHTML):

<button onclick="this.innerHTML = Date()">The time is?</button>

OBS:O código JavaScript geralmente tem várias linhas. É mais comum ver atributos de evento chamando funções:

<button onclick="displayDate()">The time is?</button>
*/

//Eventos HTML comuns

/*

Aqui está uma lista de alguns eventos HTML comuns:

Evento	Descrição
onchange	Um elemento HTML foi alterado
onclick	O usuário clica em um elemento HTML
onmouseover	O usuário move o mouse sobre um elemento HTML
onmouseout	O usuário move o mouse para longe de um elemento HTML
onkeydown	O usuário pressiona uma tecla do teclado
onload	O navegador terminou de carregar a página
*/


//O que o JavaScript pode fazer?

/*
Os manipuladores de eventos podem ser usados ​​para manipular e verificar a entrada do usuário, ações do usuário e ações do navegador:

    -Coisas que devem ser feitas sempre que uma página carrega
    -Coisas que devem ser feitas quando a página é fechada
    -Ação que deve ser realizada quando um usuário clica em um botão
    -Conteúdo que deve ser verificado quando um usuário insere dados
    -E mais ...

Muitos métodos diferentes podem ser usados ​​para permitir que o JavaScript funcione com eventos:

    -Os atributos do evento HTML podem executar o código JavaScript diretamente
    -Atributos de eventos HTML podem chamar funções JavaScript
    -Você pode atribuir suas próprias funções de manipulador de eventos a elementos HTML
    -Você pode impedir que eventos sejam enviados ou tratados
    -E mais ...
*/