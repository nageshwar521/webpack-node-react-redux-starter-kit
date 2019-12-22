export const titleCase = (str, separator = ' ') => {
  var splitStr = str
    .toLowerCase()
    .split(separator);
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(' ');
};

export const calculateCart = cartItems => {
  let subTotal = cartItems.reduce((totalValue, currentItem) => {
    return totalValue + (currentItem.p_quantity * currentItem.p_price);
  }, 0);
  let totalCartItems = cartItems.reduce((totalItems, currentItem) => {
    return totalItems + currentItem.p_quantity;
  }, 0);
  // console.log("totalCartItems");
  // console.log(totalCartItems);
  let discount = 0, shippingCost = 37;
  if (totalCartItems === 3) {
    discount = 5;
  } else if (totalCartItems > 3 && totalCartItems <= 10) {
    discount = 10;
  } else if (totalCartItems > 10) {
    discount = 25;
  }

  const totalAmount =
    discount > 1 ? (subTotal - (100 * discount) / subTotal) : subTotal;

  if (subTotal > 50) {
    shippingCost = 0;
  }

  const totalCost = totalAmount + shippingCost;

  return {
    subTotal,
    discount,
    shippingCost,
    totalCost
  };
};
