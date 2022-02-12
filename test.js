// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar, sum } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});
test("One dollar should be 153.48 yen", function(){
    //importthe function from app.js
    const{fromDollarToYen} = require("./app.js")

    //use the function like its supposed to be used
    const yen = fromDollarToYen(3.5)

    //if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5'1.2)
    const expected = 3.5 * 153.48;

    //this is the comparison for the unit test
    expect(fromDollarToYen(3.5)).toBe(expected);
});
test("One pound should be 159.875 yen", function(){
    //import the funtion from app.js
    const {fromYenToPound} = require("./app.js")

    // use the function like its supposed to be used
    const yen = fromYenToPound(3.5)

    //if 1 euro are 1.206 dollrs, then 3.5 euros should be (3.5'1.2)
    const expected = 3.5 * 159.875;

    //this is the comparison for the unit test.
    expect(fromYenToPound(3.5)).toBe(expected);

});