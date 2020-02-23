/*

Tuple ->  Array like structure where each element represents some property of a record

*/


const drink = {
    color : 'brown',
    carbonated : true,
    sugar  : 40
};



// order has to be remembered in this case with tuple
const pepsi : [string, boolean, number] = ['brown', true, 40];

type Drink = [string, boolean, number];

const sprite : Drink = ['clear', true, 40];

const tea : Drink = ['brown', false, 0];


// when to use tuples

// here hard to figure out what number actually mean
const carSpecs : [number, number] = [400, 3354];


// so object representation is better compared to above
const carStats = {
    horsePower : 400,
    weight : 3354
};