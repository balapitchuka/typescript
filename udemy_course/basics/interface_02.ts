/*
Interface : Creates a new type, describing the property names and value types of an object

Note : when type annotations using interface the actual object receive should atleast have all properties
( + with some extra properties not in interface) defined in interface.

*/

interface Car{
    name: string;
    year: number;
    broken: boolean;
    date: Date;

    summary(): string;      // summary function returns string
};



const oldCar = {
    name : 'Benz',
    year : 2000,
    broken : true,
   date : new Date(),
   summary(): string {
       return `Name : ${this.name}`;
   }
 };
 
 const printCar = (car: Car) : void => {
    console.log(`name : ${car.name}`);
    console.log(`year : ${car.year}`);
    console.log(`broken : ${car.broken}`);
    console.log(`broken : ${car.date}`);
    console.log(car.summary())
};

printCar(oldCar);




// what if we want to use only summary()  in function

// more generic interface to use with more reusable code with different objects
interface Reportable {
    summary() : string
};

// item should have atleast all properites defined in interface and can have extra properties also
const printSummary = (item: Reportable): void => {
    console.log(item.summary());
  };

const drink = {
color: 'brown',
carbonated: true,
sugar: 40,
summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
}
};

printSummary(oldCar);
printSummary(drink);

export {};