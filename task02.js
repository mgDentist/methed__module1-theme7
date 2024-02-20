const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const averageSum = Math.floor(sum / arr.length);
    console.log(`Средний чек за день: ${averageSum}`);
};

getAverageValue(allСashbox);
