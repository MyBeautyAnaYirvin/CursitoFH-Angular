/*
    ===== Código de TypeScript =====
*/
 interface Address { //esta es una forma de definicion aparte, se puede definir dentro de la interface superHero
    address: string;
    country: string;
    city: string;
}
interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;//metodo que no recibe parametros y devuelve un string
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        address: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}

const address = superHeroe.showAddress();
console.log( address );

export {};