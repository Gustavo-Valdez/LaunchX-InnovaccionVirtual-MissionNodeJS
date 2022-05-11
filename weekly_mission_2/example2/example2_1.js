console.log("POO")

//Objeto de js
const woopa_obj = {
    name: "Woopa",
    mission: "Node JS",
    age: "12",
    color: "pink",
}

// Crear una Clase
/*
1. Como crear una clase
2. Como instanciar un objeto de una clase
3. Instanciar varios objetos de una misma clase
4. Como agregar el constructor para guardar atributos al crear un objeto
5. Crear Metodos
*/

class Ajolonauta {
    constructor(name, mission, age, color) {
        this.name = name
        this.mission = mission
        this.age = age
        this.color = color
    }

    sayHello() {
        return `${this.name} is saying hello!`
    }
}

class Pokemon {
    constructor(name) {
        this.name = name
    }
}

const pikachu = new Pokemon ("Pikachu")
console.log(pikachu)

//Objeto de JS
const woopa_obj_js = {} 
console.log(woopa_obj_js)

const woopa = new Ajolonauta("Woopa", "Node JS", 18, "Pink" ) // Instanciar un objeto
console.log(woopa)
console.log(woopa.sayHello())

const wooper = new Ajolonauta("Wooper", "Java", 10, "Blue" ) 
console.log(wooper.sayHello())

