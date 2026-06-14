// Window é o objeto global do navegador

// Caso o this seja usado fora de qualquer função ou objeto, oq resta
// para ele apontar é o objeto global (window)

// Caso o this seja usado em uma function dentro de um objeto, ele vai
// apontar para um de seus métodos, obtendo o valor deles

// Caso um objeto tenha sua função "Roubada", o this vai apontar para o
// objeto que chamou a função

function Pessoa(){
    this.nome = "Mavi";
    this.idade = 27;
    this.printNome = function(numero){
        alert(this.numero);
    }
}

var pessoa = new Pessoa();

pessoa.printNome();