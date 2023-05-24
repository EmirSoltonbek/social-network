// получение кол-ва продуктов, находящихся в корзине
export function getCountProductsInCart() {
    const userEmail = localStorage.getItem("email");
    // получаем объект cart из localStorage
    const cart = JSON.parse(localStorage.getItem(userEmail));
    //возвращаем длину массива products
    return cart ? cart.products.length : 0;
  }

// подсчет стоимости за одну позицию, кол-во * стоимость одного продукта
export const calcSubPrice = (product) => {
    return +product.count * product.item.price;
  };
  
  // функция для подсчета общей стоимости корзины
  export const calcTotalPrice = (products) => {
    //возвращаем результат сложения всех subPrice
    return products.reduce((acc, curr) => {
      return (acc += curr.subPrice);
    }, 0);
  };