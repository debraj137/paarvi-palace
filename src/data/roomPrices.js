export const rooms = {
  "Deluxe Room": {
    nonAc: {
      originalPrice: 1499,
      discountPercent: 50,
    },
    ac: {
      originalPrice: 2000,
      discountPercent: 50,
    },
  },
  "Executive Room": {
    nonAc: {
      originalPrice: 1999,
      discountPercent: 50,
    },
    ac: {
      originalPrice: 2500,
      discountPercent: 50,
    },
  },
  "Family Suite (2 beds)": {
    nonAc: {
      originalPrice: 2499,
      discountPercent: 50,
    },
    ac: {
      originalPrice: 3000,
      discountPercent: 50,
    },
  },
};

export const getDiscountedPrice = (originalPrice, discountPercent) => {
  return Math.round(originalPrice - (originalPrice * discountPercent) / 100);
};

export const getRoomPricing = (room) => {
  if (!room) return null;

  return {
    nonAc: {
      ...room.nonAc,
      discountedPrice: getDiscountedPrice(
        room.nonAc.originalPrice,
        room.nonAc.discountPercent
      ),
    },
    ac: {
      ...room.ac,
      discountedPrice: getDiscountedPrice(
        room.ac.originalPrice,
        room.ac.discountPercent
      ),
    },
  };
};
