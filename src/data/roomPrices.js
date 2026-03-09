export const rooms = {
  "Deluxe Room": {
    originalPrice: 1499,
    discountPercent: 50
  },
  "Executive Room": {
    originalPrice: 1999,
    discountPercent: 50
  },
  "Family Suite": {
    originalPrice: 2499,
    discountPercent: 50
  }
};

export const getDiscountedPrice = (originalPrice, discountPercent) => {
  return Math.round(originalPrice - (originalPrice * discountPercent) / 100);
};