//EJERCICIO USANDO PROMPT

let productos = {
  ropa: {
    type: 'ropita',
    count: '4',
    price: '12',
  },

  libros: {
    type: 'librito',
    count: '9',
    price: '12',
  },

  general: {
    type: 'articulos',
    count: '7',
    price: '12',
  },
};

/* USANDO IFF 

let compra = prompt('¿qué artículo quieres comprar, ropa, libros o general?');
let IVA

if (productos[compra].type == 'ropita' && productos.ropa.count > 0) {
  IVA = 0.1;
} else if (productos[compra].type == 'librito' && productos.libros.count > 0) {
  IVA = 0.04;
} else if (
  productos[compra].type == 'articulos' &&
  productos.general.count > 0
) {
  IVA = 0.21;
}

let totalsinIVA = productos[compra].count * productos[compra].price;
let IVAtotal = IVA * totalsinIVA;
let totalconIVA = IVAtotal + totalsinIVA;
console.log('Total de la compra incluido el IVA: ' + totalconIVA + '€');

*/

//USANDO SWITCH

let compra = prompt('¿qué artículo quieres comprar, ropa, libros o general?');
let IVA;

switch (productos[compra].type) {
  case 'ropita':
    IVA = 0.1;
    break;

  case 'librito':
    IVA = 0.04;
    break;

  case 'articulos':
    IVA = 0.21;
}
let totalsinIVA = productos[compra].count * productos[compra].price;
let IVAtotal = IVA * totalsinIVA;
let totalconIVA = totalsinIVA + IVAtotal;
console.log('Total de la compra incluido el IVA: ' + totalconIVA + '€');
