let skills: string[] = ['Bash', 'Counter', 'Healing'];//las variables definidas como const son mas ligeras por que no tienen metodos de asignacion osea la variable no se le puede reasignar


interface Character { //la interface sirve para definir el tipo de un objeto que tiene una serie de propiedades
    name: string;
    hp: number;
    skills: string[];
    hometown?: string | undefined;//hometown es opcional osease puede ser string o indefinido
}

const strider: Character ={
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
}


strider.hometown = 'Rivendell';


console.table([strider]); 


export {}