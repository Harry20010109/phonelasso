import { PRODUCT_PRICE } from "../constants";

export const calculateSubTotal = (items) => {
  let total = 0;
  for (let index = 0; index < items.length; index++) {
    const element = items[index];
    total = total + parseInt(element.quantity) * PRODUCT_PRICE;
  }
  return total.toFixed(2);
};

export const calculateTotal = (items, shippingCost) => {
  let total = 0;
  for (let index = 0; index < items.length; index++) {
    const element = items[index];
    total = total + parseInt(element.quantity) * PRODUCT_PRICE;
  }
  total += shippingCost;
  return total.toFixed(2);
};

export const calculatePriceWithTwoDecimal = (price) => {
  return price.toFixed(2);
};
