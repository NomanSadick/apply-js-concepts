const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 }
];

const cheapItem = () => {
    let count = items[0];
    for (const item of items) {
        if (item.price < count.price) {
            count = item;
        }
    }
    return count;
}

const output = cheapItem(items);
console.log(output);