// synchronous blocking behaviour
// const processOrder = (customer) => {
//     console.log(`processing order for customer 1`);

//     var currentTime = new Date().getTime();
//     while (currentTime + 3000 >= new Date().getTime());
//         console.log(`order processed for customer 1`);
// }
// console.log(`take order for customer 1`);
// processOrder()
// console.log(`completed order for customer 1`);


// remove sync blocking behaviour code
const processOrder = (customer) => {
    console.log(`processing order for customer 1`);
    setTimeout(() => {
        console.log(`Cooking completed`);
    }, 3000);

    console.log(`order processed for customer 1`);
}
console.log(`take order for customer 1`);
processOrder()
console.log(`completed order for customer 1`);


// async way operation to control 
// const takeOrder = (customer, callback) => {
//     console.log(`take order for ${customer}`);
//     callback(customer)
// }
// const processOrder = (customer, callback) => {
//     console.log(`processing order for ${customer}`);

//     var currentTime = new Date().getTime();
//     setTimeout(() => {
//         console.log(`cooking completed`);
//         console.log(`order processed for ${customer}`);
//         callback(customer);
//     }, 3000);

// }

// const completedOrder = (customer) => {
//     console.log(`completed order for ${customer}`);
// }

// takeOrder('customer 1', (customer) => {
//     processOrder(customer, (customer) => {
//         completedOrder(customer);
//     })
// })

// console.log('Hello');
