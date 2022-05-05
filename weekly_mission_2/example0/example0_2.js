console.log("2) Creacion de un objeto con propiedades");

const explorer = {
    name: "Gustavo",
    age: 19,
    mission: "Node JS",
    stack: ["js", "node", "react", "vue"],
    blog: {
        url: "https://github.com/Gustavo-Valdez",
        posts: 5
    }
}

console.log(explorer);
console.log("Accediendo a las propiedades del objeto");
console.log(explorer.name);
console.log(explorer["name"]);

// -----------------------------------------------------
console.log("Ejemplo 3: Objeto con métodos");
const  ajolonauta = {
    name: "Woopa",
    mission: "Node JS",
    sayHelloToExplorers: function() {
        console.log("Soy el ajolonauta, que onda!");
    },
    tellMeMore: function () {
        return `Ajolonauta: ${this.name}`;
    }
}

console.log("Ajolonauta:");
console.log(ajolonauta);
ajolonauta.sayHelloToExplorers();