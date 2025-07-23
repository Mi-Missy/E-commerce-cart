import createItem from './services/item.js';
import * as cartService from './services/cart.js';
const myCart = [];
const myWishlist = [];

console.log("Welcome to your shopee cart!");

const item1 = await createItem("Blusa de moletom", 30.00, 3);
const item2 = await createItem("Calça jeans básica", 50.00, 2);
const item3 = await createItem("Bolsa escolar", 70.00,1);
const item4 = await createItem("Cadeno 10 Matérias", 20.00, 3);


await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item3);
await cartService.addItem(myCart, item4);
await cartService.addItem(myWishlist, item2);
await cartService.deleteItem(myCart, item1.name);
await cartService.removeItem(myCart,item4);



await cartService.displayCart(myCart);

console.log("Total is:");
await cartService.calculateTotal(myCart);