import { productInterface } from '../product/productInterface';
import { cartInterface } from '../cart/cartInterface';

export interface cartItemsInterface extends productInterface, cartInterface {}
