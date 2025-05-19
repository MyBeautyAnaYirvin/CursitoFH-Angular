

function addNumbers(a: number,b: number){ //si es que no se le pone un tipo de dato se le asigna any por defecto pero explicitamente se le dice que es de tipo any
    return a + b;
    
}

const addNumberArrow = (a: number, b: number): string => {//lambda function arrow function
    return `${a + b}`; //esto se le conoce como backtick que en su expresion o concepto es que se usa como una inyeccion de texto 
}

function multiply(firstNumber: number, secondNumber? : number, base: number = 2): number{
    return firstNumber * base
}

// const multiplyResult = multiply(5);
// // const result: number = addNumbers(1,2)
// // const result2: string = addNumberArrow(1,2)
// // console.log({result2});
// // console.log({result}); //las llaves son para devolverlo como un objeto 

// console.log({result, result2, multiplyResult})

interface Character {
    name: string;
    hp: number;
    showHp: () => void; //se define como funcion que no recibe ningun parametro y no retorna nada
}
const healCharacter = (character: Character, amount: number) => {
    character.hp+= amount; 

}

const strider: Character = {
    name: "strider",
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}

strider.showHp();

healCharacter(strider, 10);
export {};//esto no es necesario cuando se usa angular, ya que esto se resuelve cuando nuestros archivos exporten algo