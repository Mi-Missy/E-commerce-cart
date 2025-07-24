import createItem from './services/item.js';
import * as cartService from './services/cart.js';


const myCart = [];
const myWishlist = [];

console.log("Welcome to your e-commerce cart!\n");

//cria itens
const item1 = await createItem("Blusa de moletom", 30.00, 3);
const item2 = await createItem("Calça jeans básica", 50.00, 2);
const item3 = await createItem("Bolsa escolar", 70.00,1);
const item4 = await createItem("Cadeno 10 Matérias", 20.00, 3);

//adiciona itens no carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item3);
await cartService.addItem(myCart, item4);
await cartService.addItem(myWishlist, item2);

//deleta um item do carrinho
await cartService.deleteItem(myCart, item1.name);

//tira um item do carrinho
await cartService.removeItem(myCart,item4);

//Mostra os itens do carrinho
await cartService.displayCart(myCart);


// mostra o valor total a pagar
console.log("Total is:");
await cartService.calculateTotal(myCart);

//Mostra os itens do wishlist
console.log("My wishlist");
await cartService.displayCart(myWishlist);


// mostra o valor total a pagar do wishlist
console.log("Total is:");
await cartService.calculateTotal(myWishlist);