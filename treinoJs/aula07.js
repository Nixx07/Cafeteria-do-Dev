// forEach
// Ciclo de repetição poderoso para interagir com objts

var users = [
    { name: "Miguell", age: 16},
    { name: "Yuri", age: 15},
    { name: "Sahel", age: 18}
];

users.forEach(function(item, index){
    if (item.age >= 18){
        console.log(`O usuário ${item.name}, número ${index} é maior de idade.`);
    }
})