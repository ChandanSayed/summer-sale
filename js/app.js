const totalNode = document.querySelector('.total');
const finalTotalNode = document.querySelector('.final-total');
const discountNode = document.querySelector('.discount');
const cartProductList = document.querySelector('.cart-product-list');
const purchaseButton = document.querySelector('.purchase');
const couponButton = document.querySelector('.coupon-btn');
const couponNode = document.querySelector('.coupon-field');

let total = getPrice('.total');
let finalTotal = getPrice('.final-total');
let discount = getPrice('.discount');

function getPrice(selector) {
  const priceNode = document.querySelector(selector);
  const price = parseFloat(priceNode.innerText.replace('TK', ''));
  return price;
}

function clickHandle(event) {
  const price = parseFloat(event.querySelector('.price').innerText.replace('TK', ''));
  const title = event.querySelector('.card-title').innerText;
  total += price;
  finalTotal += price;
  const list = document.createElement('li');
  list.innerText = title;
  cartProductList.appendChild(list);
  totalNode.innerText = total.toFixed(2) + ' TK';
  finalTotalNode.innerText = finalTotal.toFixed(2) + ' TK';
  if (finalTotal > 0) {
    purchaseButton.removeAttribute('disabled');
  }
  if (finalTotal > 200) {
    couponButton.removeAttribute('disabled');
  }
}

couponButton.addEventListener('click', function () {
  const couponCode = couponNode.value;
  if (couponCode === 'SELL200') {
    discount = (total * 20) / 100;
    finalTotal -= discount;
  }
  couponNode.value = '';
  couponNode.setAttribute('disabled', true);
  finalTotalNode.innerText = finalTotal.toFixed(2) + ' TK';
  discountNode.innerText = discount.toFixed(2) + ' TK';
  console.log(discount, finalTotal);
});

document.querySelector('.home').addEventListener('click', function () {
  total = 0;
  discount = 0;
  finalTotal = 0;
  totalNode.innerText = total + ' TK';
  discountNode.innerText = discount + ' TK';
  finalTotalNode.innerText = finalTotal + ' TK';
  cartProductList.innerHTML = '';
  purchaseButton.setAttribute('disabled', true);
  couponButton.setAttribute('disabled', true);
  couponNode.removeAttribute('disabled');
});
