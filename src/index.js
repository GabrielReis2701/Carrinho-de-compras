import * as cardService from './services/cart.js';
import createItem from './services/item.js';

const Mycart = [];


console.log('Bem vindo ao Carrinho de Compras');

const item1 =  await createItem("Camiseta", 50, 2);
const item2 = await createItem("Calça Jeans", 120, 1);

cardService.addItem(Mycart, item1);
cardService.addItem(Mycart, item2);

//cardService.deleteItem(Mycart, item2.name);

cardService.removeItem(Mycart, item1);
cardService.displayCart(Mycart);

cardService.calculeteTotal(Mycart);