const animalCount = (miles) => {
    const first10PerMilesForAnimals = 7;
    const second10PerMilesForAnimals = 50;
    const third10PerMilesForAnimals = 100;
    if (miles <= 10) {
        const first10Miles = miles * first10PerMilesForAnimals;
        return first10Miles;
    }else if (miles <= 20) {
        const first10Miles = 10 * first10PerMilesForAnimals;
        const restMiles = miles - 10;
        const second10Miles = restMiles * second10PerMilesForAnimals;
        const totalAnimals = first10Miles + second10Miles;
        return totalAnimals;
    }else {
        const first10Miles = 10 * first10PerMilesForAnimals;
        const second10Miles = 10 * second10PerMilesForAnimals;
        const restMiles = miles - 20;
        const third10Miles = restMiles * third10PerMilesForAnimals;
        const totalAnimals = first10Miles + second10Miles + third10Miles;
        return totalAnimals;
    }
}

const output = animalCount(20);
console.log(output);