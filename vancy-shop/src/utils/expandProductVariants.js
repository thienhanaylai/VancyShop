/**
 * @param {Array}
 * @returns {Array}
 */

export default function expandProductVariants(productsArray) {
  return productsArray.flatMap((product) => {
    return product.weight.map((weightValue, index) => {
      return {
        ...product,
        src: `/assets/matcha/banner/${product.id}-${weightValue}.png`,
        id: `${product.id}-${weightValue}`,
        weight: [weightValue],
        price: [product.price[index]],
      };
    });
  });
}
