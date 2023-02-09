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
        // console.log("Add to cart")
    })
}
// adding products to cart using localstorage

const cartnumbers = (products) =>   1

