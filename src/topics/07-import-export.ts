//el objetivo de exportar es transformar un archivo en un modulo y la idea principal es mostrar al mundo exterior (el resto de archivos) lo que contiene el archivo
// ctrl + espacio para 
import { Product } from './06-function-destructuring.ts';
import { taxCalculation } from './06-function-destructuring.ts';
const shoppingCart: Product[] = [
    {
        description: 'Nokia A1',
        price: 150
    },
    {
        description: 'Ipad Air',
        price: 250
    }
];

const [total, tax ] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});
console.log('Total', total);
console.log('Tax', tax);
