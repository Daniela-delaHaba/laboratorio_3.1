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

let compra = prompt('¿qué artículo quieres comprar?');

if (productos[compra].type == 'ropita' && productos.ropa.count > 0) {
  totalsinIVA = productos.ropa.count * productos.ropa.price;
  IVA = totalsinIVA * 0.1;
  totalconIVA = totalsinIVA + IVA;
} else {
  totalconIVA = 0;
}

if (productos[compra].type == 'librito' && productos.libros.count > 0) {
  totalsinIVA = productos.libros.count * productos.libros.price;
  IVA = totalsinIVA * 0.04;
  totalconIVA = totalsinIVA + IVA;
} else {
  totalconIVA = 0;
}

if (productos[compra].type == 'articulos' && productos.general.count > 0) {
  totalsinIVA = productos.general.count * productos.general.price;
  IVA = totalsinIVA * 0.21;
  totalconIVA = totalsinIVA + IVA;
} else {
  totalconIVA = 0;
}

console.log(totalconIVA);

/*
switch (productos[compra].type) {
  case ropita:
    totalsinIVA = productos.ropa.count * productos.ropa.price;
    IVA = totalsinIVA * 0.1;
    totalconIVA = totalsinIVA + IVA;
    break;

  case librito:
    totalsinIVA = productos.libros.count * productos.libros.price;
    IVA = totalsinIVA * 0.04;
    totalconIVA = totalsinIVA + IVA;
    break;

  case general:
    totalsinIVA = productos.general.count * productos.general.price;
    IVA = totalsinIVA * 0.21;
    totalconIVA = totalsinIVA + IVA;
}

console.log(totalconIVA);
*/
