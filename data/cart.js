import {deliveryOptions} from './deliveryOptions.js';

export let cart=JSON.parse(localStorage.getItem('cart')) ;
//here JSON.parse() converts the String back to an array of objects for the cart variable to read it 
  if(!cart){
    cart=[   
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
    deliveryOptionId:'1',

  },
  {
    productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
    deliveryOptionId:'2',
  }];
  }


function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));//local storage can only save strings

}


//this is the variable we want to export (access it outside of the file)
export function addToCart(productId, quantity){
    const deliveryOptionId = deliveryOptions[0].id;//by default we will set the delivery option to the first one (index 0) which is the cheapest one
    let matchingItem;
    cart.forEach((cartItem) => {
      if (cartItem.productId === productId) {
        matchingItem = cartItem;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += quantity;
    } else {
      cart.push({
        productId,//destruction
        quantity,
        deliveryOptionId//by default it will go to the first delivery option
      });
    }
    saveToStorage();
    
}

export function removeFromCart(productId){
  const newCart=[];
  cart.forEach((cartItem)=>{
    if(cartItem.productId !== productId){// we can also put (!product)
      newCart.push(cartItem);
    }
  });

  cart = newCart;
  saveToStorage();/*we put the function saveToStorage() in bothe remove/add from cart since any item is added or removed is must be updated in the local storage aswell */
  
}

export function calculateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  return cartQuantity;
}



