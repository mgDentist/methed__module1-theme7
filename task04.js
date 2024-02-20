const allСashboxTask04 = [
    [12, 4500],
    [7, 3210],
    [4, 650],
    [3, 1250],
    [9, 7830],
    [1, 990],
    [6, 13900],
    [1, 370]
];

const averageSumOfEachGood = [];

const getAveragePriceGoods = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const [goodsAmount, goodsTotalSum] = arr[i];
        const averageSum = Math.round(goodsTotalSum / goodsAmount);
        averageSumOfEachGood.push(averageSum);
    }

    console.log(averageSumOfEachGood);
};

getAveragePriceGoods(allСashboxTask04);
