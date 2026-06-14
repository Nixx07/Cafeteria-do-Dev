class Animal{
    constructor(nome){
        this.nome = nome;
    }

    printNome(){
        return this.nome;
    }
}

alert(animal.printNome());

class Cachorro extends Animal{
    constructor(nome){
        super(nome);
    }
}

cachorro = new Cachorro();
alert(cachorro.printNome());