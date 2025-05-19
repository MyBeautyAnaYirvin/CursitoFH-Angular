

const name = 'Irving'; //si la variable nunca va a cambiar se puede manejar como const
let hpPoints: number | string= 95; // despues de declarar el tipo de dato se puede usar | para indicar que puede ser de un tipo o de otro
const isAlive: boolean = true;


hpPoints = 'FULL';

console.log({name, hpPoints, isAlive});



export{};//el archivo se convierte en un modulo para vite