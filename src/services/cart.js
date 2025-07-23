//adicionar itens no carrinho

async function addItem(userCart,item) {
    userCart.push(item);
};

//deleta itens do carrinho

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);


    if (index !== (-1)) {

        userCart.splice(index,1);
        
    }
};

//remover itens do carrinho

async function removeItem(userCart,index) {
    
};

//calcular o total

async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(),0);
    console.log(result);
    
};

export { addItem,removeItem,deleteItem,calculateTotal};