// Condições

let numero = 10;
let nome = "Miguell";

/*
if(nome == "Miguell"){ // Condicional "Se a variável nome for igual a Miguell, é verdadeiro. Senão (else), é falso"
    console.log("Verdadeiro");
}else{
    console.log("Falso");
}
*/

// >= - Maior ou igual
// > - Maior
// <= - Menor ou igual
// < - Menor

/*
if (numero >= 10){
    console.log("Verdadeiro");
}else{
    console.log("Falso");
}
*/

// != - Diferente (Contrário de igual)

/*
if (nome != "Miguel"){
    console.log("Nome diferente de Miguell");
}else{
    console.log("O nome é Miguell");
}
*/

// &&, & - "E", usado quando duas condições tem q ser verdadeiras ou falsas
// || - "OU", usado quando pelo menos uma das condições tem q ser falsas ou verdadeiras

if (numero == 10 && nome == "Miguell"){
    console.log("O nome é igual a 10 e o numero igual a Miguell.")
}else{
    console.log("Uma das condições é falsa.");
}

if(numero == 10 || nome == 'Pablo'){
    console.log("Uma das condições é verdadeira");
}