import { productInterface } from '../interfaces/product/productInterface';

import { cartInterface } from '../interfaces/cart/cartInterface';
import { cartItemsInterface } from '../interfaces/cart/cartItems';

export const CartStorage = {
  getCart: () => {
    return JSON.parse(localStorage.getItem('cartStorage')!);

    // var storedNames = JSON.parse(localStorage.getItem("names"));
  },
  addItemToCart: (item: cartItemsInterface) => {
    let cartItems: cartItemsInterface[] = CartStorage.getCart();
    // cartItem.forEach(element => {
    //   if (element._id == item._id) {
    //     console.log('DUPPLICATE');
    //   }
    // });
    let arrItems: cartItemsInterface[] = [];
    if (typeof cartItems !== 'undefined' && cartItems.length == 0) {
      console.log('CALL DUPPLICATE (1)');
      arrItems = [item];
    } else {
      for (let index = 0; index < cartItems.length; index++) {
        if (cartItems[index]._id === item._id) {
          cartItems[index] = item;
          arrItems = [...cartItems];
          //   arrItems = [...cartItems];
          break;
        } else {
          arrItems = [...cartItems, item];

          break;
        }
      }
    }
    localStorage.setItem('cartStorage', JSON.stringify(arrItems));
  },
  removeCart: () => {
    localStorage.removeItem('cartStorage');
  },
};
