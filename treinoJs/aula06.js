// Ciclos de Repetição

// Muitos pareceidos com a linguagem C

/*
let n = 0;
// while - recomendado

while (n < 10){ // Enquanto "n", for menor q 10
    // Esse código vai ser repetido
    n++;
    console.log(n);
}
*/
// cria uma let    condicao da repeticao    codigo q vai ser exacutado até a condição ser true
/*

// for - recomendado
for(let i = 0;            i < 10;                               (i++)){
    console.log(i);
}
*/

// o "do" executa o código antes de fazer a verificação - pouco usado
var n = 0;
do{
    console.log(n);
}while(n < 10);