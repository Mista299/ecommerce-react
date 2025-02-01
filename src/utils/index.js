/**
 * This function calculates total price of a new order
 * @param {Array} products  cartProduct: Array of Objects
 * @returns {number} Total price
 */

export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => { sum += product.price});
    console.log("El precio total es de: ", sum)
    return sum
}