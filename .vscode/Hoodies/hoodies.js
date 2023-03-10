let cartbtn=document.querySelectorAll(".add-cart");
let products = [
    {
    name:'Luxury Hoddie',
    tag:'LuxuryHoodie',
    img:'WhatsApp Image 2023-02-07 at 12.37.35 PM.jpeg',
    price:12000,
    incart:0
},
{
    name:'Luxury Hoddie',
    tag:'LuxuryHoodie',
    img:'WhatsApp Image 2023-02-07 at 12.37.35 PM.jpeg',
    price:12000,
    incart:0
},
{
    name:'Luxury Hoddie',
    tag:'LuxuryHoodie',
    img:'WhatsApp Image 2023-02-07 at 12.37.35 PM.jpeg',
    price:12000,
    incart:0
},
{
    name:'Luxury Hoddie',
    tag:'LuxuryHoodie',
    img:'WhatsApp Image 2023-02-07 at 12.37.35 PM.jpeg',
    price:12000,
    incart:0
},
];
for(let i = 0; i < cartbtn.length; i++){
    cartbtn[i].addEventListener('click', (e)=> {
        e.preventDefault();
         //console.log("Add to cart");
         cartNumbers(products[i]);
    })
}

const onLoadCartNumbers = () =>{
    let productNumbers = localStorage.getItem("cartNumbers");
    if(productNumbers){
        document.querySelector('cart span').innerHTML = productNumbers
    }
}

// adding products to cart using localstorage

const cartNumbers = (products) =>{
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers= parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').innerHTML = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers',  1);
        document.querySelector('.cart span').innerHTML = 1;
    }
    setItems(product)
} 
let setItems = (product) => {
    let cartItems = localStorage.getItem('productInCart');
    cartItems=JSON.parse(cartItems);
    if(cartItems!=null){
        if(cartItems[product.tag]==undefined){
            cartItems = {
                ...cartItems,
                [product.tag]:product
            }
        }
        cartItems[product.tag].incart += 1;   

    }else{
        product.incart =1
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem('productIncart', JSON.stringify(cartItems) )
}
onLoadCartNumbers()