const getCostAfterOfferApplied = (offerAvailable, quantity, cost) => {
  switch (offerAvailable) {
    case "threeForPriceOfTwo":
      if (quantity >= 3) {
        const quantityAfterOffer =
          2 * Math.floor(quantity / 3) + (quantity % 3);
        return quantityAfterOffer * cost;
      }
      return quantity * cost;
    case "buyOneGetOneFree":
      if (quantity >= 2) {
        const quantityAfterOffer = Math.floor(quantity / 2) + (quantity % 2);
        return quantityAfterOffer * cost;
      }
      return quantity * cost;
    default:
      return cost;
  }
};


const updatedCartList = (cartItems) => {
    const itemMap = {};
    const mergeCartItems = cartItems.reduce((acc, curr) => {
      const accItemIndex = itemMap[curr.id];
      if (accItemIndex >= 0) {
        const updatedItemQuantity = acc[accItemIndex].quantity + 1;
        acc[accItemIndex] = {
          ...acc[accItemIndex],
          quantity: updatedItemQuantity,
        };
      } else {
        acc = [...acc, { ...curr, quantity: 1 }];
        itemMap[curr.id] = acc?.length - 1;
      }
      return acc;
    }, []);

    let totalCartCost = 0;
    const updatedItems = mergeCartItems.map((item) => {
      const totalCost = item.offerAvailable
        ? getCostAfterOfferApplied(
            item.offerAvailable,
            item.quantity,
            item.cost
          )
        : item.quantity * item.cost;
      totalCartCost += totalCost;
      return { ...item, totalCost: totalCost };
    });

    return { updatedItems, totalCartCost };

};

export default updatedCartList;
