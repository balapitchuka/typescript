

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
