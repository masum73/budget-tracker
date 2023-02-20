function getInputFieldValue(elementId){
    const inputField = document.getElementById(elementId);
    const inputFieldString = inputField.value;
    const inputValue = parseInt(inputFieldString);
    return inputValue;
}
/* function kitkatCalculation(quantity){
    const price = 200; 
    return quantity * price;

}
function flowersCalculation(quantity){
    const price = 400; 
    return quantity * price;

}
function diaryCalculation(quantity){
    const price = 300; 
    return quantity * price;

} */

function totalCalulation (fieldName,quantity){
    const kitkatPrice = 200;
    const flowersPrice = 400;
    const diaryPrice = 300; 

    if(fieldName === 'kikat-field'){
        return kitkatPrice * quantity;
    }else if(fieldName === 'flowers-field'){
        return flowersPrice * quantity;
    }else{
        return diaryPrice * quantity;
    }
}

function setTotal(fieldTotal,totalPrice){
    if(fieldTotal === 'kitkat-total'){
        const kitkatTotal = document.getElementById('kitkat-total');
        kitkatTotal.innerText = totalPrice;
    }else if(fieldTotal === 'flowers-total'){
        const flowersTotal = document.getElementById('flowers-total');
        flowersTotal.innerText = totalPrice;
    }else{
        const diaryTotal = document.getElementById('diary-total');
        diaryTotal.innerText = totalPrice;
    }
}
/* function setKitkatTotal(totalAmount){
    const total = document.getElementById('kitkat-total');
    total.innerText = totalAmount;
} */


/* ............................................... */
/* function handleKitkat() {
    const kitkatCost = multiplePriceWithQuantity("kitkat-quantity", 200);
    setInnerText("chocolate", kitkatCost);
    document.getElementById("kitkat-quantity").value = "";
    total();
  }
  // calculate rose  price with quantity
  document.getElementById("btn-buy-flowers").addEventListener("click", function () {
    const roseCost = multiplePriceWithQuantity("flowers-quantity", 100);
    setInnerText("flowers", roseCost);
    document.getElementById("flowers-quantity").value = "";
    total();
  });
  // calculate diary  price with quantity
  document.getElementById("btn-buy-diary").addEventListener("click", function () {
    const diaryCost = multiplePriceWithQuantity("diary-quantity", 500);
    setInnerText("diary", diaryCost);
    document.getElementById("diary-quantity").value = "";
    total();
  });
  function total(params) {
    const chocolate = stringToNumberConverter("chocolate");
    const flowers = stringToNumberConverter("flowers");
    const diary = stringToNumberConverter("diary");
    const total = chocolate + flowers + diary;
    setInnerText("total", total);
  }
  // pass the id of the tag this function will convert just innertext to number
  function stringToNumberConverter(id) {
    const element = document.getElementById(id).innerText;
    return parseFloat(element);
  }
  // this function will take id & value of tag and set innertext
  function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
  }
  
  // this fucntion will calculate the quatity and price of gift this fucntion will take two parameter inutField id & price of gift
  function multiplePriceWithQuantity(id, price) {
    const quantity = document.getElementById(id).value;
    const totalPrice = parseInt(quantity) * parseInt(price);
    console.log(totalPrice);
  }
  
  function handlePromoCode(params) {
    const promoCode = document.getElementById("promo-code").value;
    if (promoCode == "101") {
      const total = stringToNumberConverter("total");
      setInnerText("all-total", total - total * 0.1);
    } else {
      alert("promo code is not correct");
    }
  } */
/* ............................................... */
let totalCost = document.getElementById('total');

let total = 0;
document.getElementById('btn-buy-kitkat').addEventListener('click',function(){

    const inputQuantity = getInputFieldValue('kikat-field');
    const totalPrice = totalCalulation('kikat-field',inputQuantity);
    setTotal('kitkat-total',totalPrice);
    total = total + totalPrice;
    totalCost.innerText = total;
})

document.getElementById('btn-buy-flowers').addEventListener('click',function(){
    const inputQuantity = getInputFieldValue('flowers-field');
    const totalPrice = totalCalulation('flowers-field',inputQuantity)
    setTotal('flowers-total',totalPrice);
    total = total + totalPrice;
    totalCost.innerText = total;
})

document.getElementById('btn-buy-diary').addEventListener('click',function(){
    const inputQuantity = getInputFieldValue('diary-field');
    const totalPrice = totalCalulation('diary-field',inputQuantity)
    setTotal('diary-total',totalPrice);
    total = total + totalPrice;
    totalCost.innerText = total;
})

document.getElementById('btn-apply').addEventListener('click',function(){
    const promoField = document.getElementById('discount-promo');
    const  promo = promoField.value;
    const discountTotal = document.getElementById('discount-total');

    if(promo === '101'){
        const discountAmount = total * 0.1;
        const afterDiscountAmount = total - discountAmount;
        discountTotal.innerText = afterDiscountAmount;
    }else{
        alert('enter valid promo')
    }
    
})

document.getElementById('budget-field'),addEventListener('keyup',function(){
    const budget = getInputFieldValue('budget-field');
    const valentineBudget = this.document.getElementById('valentine-budget');
    valentineBudget.innerText = budget;
})



