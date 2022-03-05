const addItem = ()=>{
    const itemField = document.getElementById('item-name')
    const item = itemField.value ;
    // display in the ui
    displayProduct(item);

    // add to local storage
    addProductToCart(item);

    //clear
    itemField.value='';
}
const displayProduct = name => {
    const ul = document.getElementById('products-list');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}

const getCart=()=>{
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart){
        cartObj = JSON.parse(cart)
    }
    else{
        cartObj={};
    }
    return cartObj;
}