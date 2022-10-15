const woodCal = (table, chair, bed) => {
    const tablePerWood = 5;
    const chairPerWood = 3;
    const bedPerWood = 10;
    const tableQuantity = table * tablePerWood;
    const chairQuantity = chair * chairPerWood;
    const bedQuantity = bed * bedPerWood;
    const totalWood = tableQuantity + chairQuantity + bedQuantity;
    return totalWood;
}

const output = woodCal(10, 5, 10);
console.log(output);