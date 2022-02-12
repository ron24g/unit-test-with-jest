const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))



const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
};
const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 153.48
    return valueInYen
};

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 159.875
    return valueInPound
};

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
