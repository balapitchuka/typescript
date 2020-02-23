/*
 Typed Arrays -> Arrays where each element is some consistent type of value
*/

const carMakers : string[] = ['ford', 'benz', 'tesla'];

const dates = [new Date(), new Date()];

const carByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

const twoDArray : string[][] = [];

// Why type arrays

//1. Help with inference when extracting values
const car = carMakers[0];

const myCar = carMakers.pop()   //remove and return last element

// 2. Prevent incompatible values
carMakers.push(10);   // error thown by TS


// 3. Help with 'map', 'forEach', 'Reduce'
carMakers.map((car : string) : string => {
    return car.toUpperCase();
})

// 4. Flexible types  , arrays can contain multiple different types
const importantDates : (string | Date)[] = [new Date(), '2012-02-10'];
importantDates.push(new Date());
importantDates.push("2009-09-12");

