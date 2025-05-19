export class Person {
    // public name: string; // se puede usar el simbolo ? para indicar que es opcional
    // public address: string;
//FORMA CORTA =
    constructor(// se pueden definir los tipos de datos de los argumentos unicamnete asignandole el nivel de acceso a cada variable y automaticamente se crean las propiedades y se asignan los valores
        public firstName: string,
        public lastName: string,
        public address: string= 'No address') {} 
}//extender una clase es la expansion de su funcionalidad


// export class Hero extends Person { //cuando se defina en la clase Hero, se aplica a Hero y se extiende a Person


    

//     constructor(
//         public alertEgo: string,
//         public age: number,
//         public realName: string
//     ){
//         super(realName, 'New york');//super es una funcion especial que le indica a typescript que tiene que llamar al constructor del padre
//     }
// }

export class Hero  { //cuando se defina en la clase Hero, se aplica a Hero y se extiende a Person


    // public person: Person;

    

    constructor(
        public alertEgo: string,
        public age: number,
        public realName: string,
        public person: Person,

    ){
        // this.person = new Person(realName);
    }

}

const tony = new Person('Tony stark','stark', 'New York');

const ironman = new Hero('Ironman', 45, 'Tony',tony);// person "()" los parentesis son el llamado a una funcion que le mande argumentos
console.log(ironman);