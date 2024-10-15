let cart = {};
const addProduct = ()=>{

    const productField = document.getElementById("product-name");

    const productQuantity = document.getElementById("product-quantity");
    const product = productField.value;
    const quantity = productQuantity.value;
    productField.value ='';
    productQuantity.value ='';
    console.log(product, quantity);
    displayProduct(product,quantity);
    saveProducttoLocalStorage(product,quantity);

}

const displayProduct =(product,quantity) =>{
    // const productField = document.getElementById("product-name");
    // const productQuantity = document.getElementById("product-quantity");  
    const ul=document.getElementById("product-container");
  
         const li = document.createElement('li');
          li.innerText = `${product}: ${quantity}`;

    ul.appendChild(li);
}

const getStoredshoppingCart = () =>{

    const storedCart = localStorage.getItem('cart');
    if(storedCart ){
        cart = JSON.parse(storedCart);
    }
    return  cart;

}

const saveProducttoLocalStorage = (product,quantity) => {
    const cart = getStoredshoppingCart();
    cart[product] = quantity;
    const cartStringified =JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified)
}

const displayProductFromLocalStorage = () => {
    const savedcart =getStoredshoppingCart();
    console.log(savedcart);
    for(const product in savedcart){
        const quantity = savedcart[product];
        console.log(product,quantity);
        displayProduct(product,quantity);
    }
}

displayProductFromLocalStorage();