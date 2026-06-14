// Funções

// Funções são blocos de códigos q ficam armazenados e 
// são acionados quando você as chama


// Modelo antigo - Não Recomendado

function testes(){
    // Executado quando chamar a função
    console.log('Chamando a fução testes');
}

function testes2(nome, idade){ // A função recebeu dois parâmetros, nome e idade, q estão vazios
    console.log("O nome chamado é: "+nome);
    console.log("A idade é: "+idade);
    console.log("--------------------------");
}

/*
testes2("Miguell", 16); // A função é chamada e recebe os valores de nome e idade
testes2("Yuri", 15); // A função é chamada e recebe os valores de nome e idade de novo
*/

// No final a formatação do console é a q está dentro da function

/*
function pegarNome(par){
    if(par == 1){
        return "Miguell";
    }else{
        return "Outro nome";
    }
}

let nome = pegarNome(0);

console.log(nome);
*/

// Outro modo de declarar funções, mas não recomendado tambem é:

/*
let func = function(){
    alert("Olá Mundo!");
}

func();
*/

// Para criar uma função e chamarmos ela logo em seguida usamos:

/*
(function(){
    alert("Olá Mundo");
})();
*/

// Mais pra frente verei arrow function