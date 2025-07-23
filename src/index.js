import createItem from './services/item.js';
import * as cartService from './services/cart.js';
const myCart = [];
const myWishlist = [];

console.log("Welcome to your shopee cart!");

const item1 = await createItem("blusa de moletom", 30.00, 3);
const item2 = await createItem("calça jeans básica", 50.00, 2);

await cartService.addItem(myCart, item1);
await cartService.addItem(myWishlist, item2);
await cartService.deleteItem(myCart, item1);

console.log("Total is:");
await cartService.calculateTotal(myCart);