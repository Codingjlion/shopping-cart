const cartItems = document.querySelectorAll('.products');
const subTotal = document.getElementById('subtotal');
const removeAllBtn = document.querySelector('.color');
let totalPrice = 0;

removeAllBtn.addEventListener('click', () => {
  cartItems.forEach(item => {
    item.remove();
  });
  totalPrice = 0;
  subTotal.textContent = `SubTotal: N${totalPrice.toFixed(2)}`;
});

cartItems.forEach(item => {
  const plusBtn = item.querySelector('.plus');
  const minusBtn = item.querySelector('.minus');
  const amountEl = item.querySelector('.amount');
  const priceEl = item.querySelector('.price');
  const removeBtn = item.querySelector('.remove');
  const likeBtn = item.querySelector('.like');

  const price = parseFloat(priceEl.textContent.replace(/[^0-9\.]+/g, ""));

  plusBtn.addEventListener('click', () => {
    let amount = parseInt(amountEl.textContent);
    amount++;
    amountEl.textContent = amount;

    totalPrice += price;
    subTotal.textContent = `SubTotal: N${totalPrice.toFixed(2)}`;
  });

  minusBtn.addEventListener('click', () => {
    let amount = parseInt(amountEl.textContent);
    if (amount > 1) {
      amount--;
      amountEl.textContent = amount;

      totalPrice -= price;
      subTotal.textContent = `SubTotal: N${totalPrice.toFixed(2)}`;
    }
  });


  removeBtn.addEventListener('click', () => {

    const quantity = parseInt(amountEl.textContent);
    item.remove();
    

    const itemPrice = parseFloat(priceEl.textContent.replace(/[^0-9\.]+/g, ""));

    const totalItemPrice = quantity * itemPrice;
    totalPrice -= totalItemPrice;
    if (totalPrice < 0){
        totalPrice = 0;
    }
    subTotal.textContent = `SubTotal: N${totalPrice.toFixed(2)}`;
  });


  likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('like-color')
    likeBtn.textContent ='Liked❤️';
   
  });
});

