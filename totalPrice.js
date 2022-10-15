const products = [
    { name: 'Bike', price: 100, quantity: 6 },
    { name: 'TV', price: 200, quantity: 2 },
    { name: 'Album', price: 10, quantity: 7 },
    { name: 'Book', price: 5, quantity: 6 },
    { name: 'Phone', price: 500, quantity: 10 },
    { name: 'Computer', price: 1000, quantity: 10 },
    { name: 'Keyboard', price: 25, quantity: 4 }
];

let totalPrice = 0;
for (const product of products) {
    // console.log(product);
    const productTotal = product.price * product.quantity;
    totalPrice = totalPrice + productTotal;
}
console.log(totalPrice);