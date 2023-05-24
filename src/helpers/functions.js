// получение кол-ва продуктов, находящихся в корзине
export function getCountProductsInCart() {
    // получаем объект cart из localStorage
    const cart = JSON.parse(localStorage.getItem("cart"));
    //возвращаем длину массива products
    return cart ? cart.products.length : 0;
  }