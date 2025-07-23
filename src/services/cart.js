//adicionar itens no carrinho

async function addItem(userCart,item) {
    userCart.push(item);
};

//deleta itens do carrinho

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
    if (index != (-1)) {

        userCart.splice(index,1);
        
    }
    

};

//remover itens do carrinho

async function removeItem(userCart,item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    
    if (indexFound === -1) {
        
        console.log("Item não emcontrado!");
        return;
    }

    if (userCart[indexFound].quantity > 1) {
       
        userCart[indexFound].quantity -= 1;
        userCart[indexFound].subtotal =userCart[indexFound].subtotal-(userCart[indexFound].price);
        
        
       
        return  ;
    }

    if (userCart[indexFound].quantity == 1) {
       
        userCart.splice(indexFound, 1);
        return;
    }
        
    
    
};

//calcular o total

async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal,0);
    console.log(result);
    
};

async function displayCart(userCart) {
    console.log("Cart list:");

    userCart.forEach((item, index) => {
        
        console.log(`${index + 1}- ${item.name} Preço unitário: $${item.price} Quantidade: ${item.quantity} Total: $${item.subtotal}`);
    })
        
};

export { addItem,removeItem,deleteItem,calculateTotal,displayCart};