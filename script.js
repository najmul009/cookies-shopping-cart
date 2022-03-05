const displayLocalStorageCart = () => {
    const cart = getCart();
    for (const name in cart) {
        // console.log(name)
        displayProduct(name);
    }
}

const addItem = ()=>{
    const itemField = document.getElementById('item-name')
    const item = itemField.value ;

    //input error handeling
    if (!item) {
        return;
    }
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

const addProductToCart=(item )=>{
    const cart = getCart()
    if (cart[item]) {
        cart[item] = cart[item] + 1;
    }
    else {
        cart[item] = 1;
    }
    const cartStringified=JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified)
}
//order and clear cart from ui and localstorage
const orderItems = () => {
    document.getElementById('products-list').textContent = '';
    localStorage.removeItem('cart');
}

//auto showing cart
displayLocalStorageCart();