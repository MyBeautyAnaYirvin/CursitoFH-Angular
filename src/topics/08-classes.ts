export class Person {
    // public name: string; // se puede usar el simbolo ? para indicar que es opcional
    // public address: string;
//FORMA CORTA =
    constructor(// se pueden definir los tipos de datos de los argumentos unicamnete asignandole el nivel de acceso a cada variable y automaticamente se crean las propiedades y se asignan los valores
        public name: string,
        public address: string) {} 
}

const ironman = new Person('Ironman', 'new York');// person "()" los parentesis son el llamado a una funcion que le mande argumentos
console.log(ironman);