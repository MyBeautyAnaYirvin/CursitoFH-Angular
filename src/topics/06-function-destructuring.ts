export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150
};

const tablet: Product = {
    description: 'Ipad Air',
    price: 250
};

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}


export function taxCalculation( option: TaxCalculationOptions ): [number, number] {

    const { products, tax } = option;
    let total = 0;

    products.forEach(  ({price})  => {
        total += price;
    });
    return [total, total * tax];
}


const shoppingCart = [phone, tablet];
const tax = 0.15;


const [total, taxValue] = taxCalculation({
    products: shoppingCart,
    tax: tax, //js ya sabe que es crear una propiedad con el valor de la variable tax
})

console.log('Total', total);
console.log('Tax', taxValue);

//La desestructuracion de un arreglo es la forma de extraer los valores de un arreglo y asignarlos a variables individuales


