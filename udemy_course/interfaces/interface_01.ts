const oldCar = {
   name : 'Benz',
   year : 2000,
   broken : true

};

// this type annotation is long to read (improvement using interface)
const printCar = (car: {name: string; year: number; broken: boolean }) : void => {
        console.log(`name : ${car.name}`);
		console.log(`year : ${car.year}`);
		console.log(`broken : ${car.broken}`);
		
};

printCar(oldCar);





  