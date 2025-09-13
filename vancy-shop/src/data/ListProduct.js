/**
 * Chuyển đổi mỗi sản phẩm có nhiều tùy chọn thành các sản phẩm đơn lẻ.
 * @param {Array} productsArray Mảng sản phẩm gốc.
 * @returns {Array} Mảng sản phẩm mới đã được làm phẳng.
 */
export function expandProductVariants(productsArray) {
  return productsArray.flatMap((product) => {
    return product.weight.map((weightValue, index) => {
      return {
        ...product,
        id: `${product.id}-${weightValue}`,
        weight: weightValue,
        price: product.price[index],
      };
    });
  });
}
