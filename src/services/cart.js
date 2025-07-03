//Adiciona um item ao carrinho de compras
async function addItem(userCard, item) {
    userCard.push(item);
}

////Deleta um item do carrinho de compras pelo índice
async function deleteItemIndex(userCard, index) {
    const deleteIndex = index - 1;
    if(index >= 0 && index < userCard.length) {
        userCard.splice(deleteIndex, 1);
        console.log(`Item removido com sucesso!`);
    }
}

//Deletar um item do carrinho de compras
async function deleteItem(userCard, name) {
    const index = userCard.findIndex((item)=> item.name === name);
    if(index!== -1){
        userCard.splice(index,1);
        console.log(`Item ${name} removido com sucesso!`);
    }
    
    
}

//Remove um item - diminui a quantidade
async function removeItem(userCard, item) {
    const indexFound = userCard.findIndex((p) => p.name === item.name);
    if(indexFound !== -1) {
        if(userCard[indexFound].quantity > 1) {
            userCard[indexFound].quantity--;
            userCard[indexFound].subTotal = () => userCard[indexFound].price * userCard[indexFound].quantity;
            console.log(`Quantidade do item ${item.name} diminuída!`);
        } else {
            deleteItemIndex(userCard, indexFound + 1);
        }
    } else {
        console.log(`Item ${item.name} não encontrado no carrinho!`);
    }
}

async function displayCart(userCard){
    userCard.forEach((item,index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} x ${item.quantity} = R$ ${item.subTotal()}`);
        
    });
}

//Calcula o total do carrinho de compras
async function calculeteTotal(userCard) {
    console.log();
    console.log("Total do carrinho de compras: R$"+ userCard.reduce((total, item)=>total + item.subTotal(),0));
}


export {
    addItem,
    removeItem,
    deleteItem,
    deleteItemIndex,
    calculeteTotal,
    displayCart
};