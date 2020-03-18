/*Notes

1. class -  a blueprint to create an object with some fields(values) and methods(functions) to represent a 'thing'

2. By default , public(this method can be called any where, any time) access modifier is used unless mentioned one.
3. When iheriting a class , donot change the access modifier of a method defined in base class in child class.

Access modifier:
public - this  can be called any where, any time
protected - accessible within class 'Vehicle' and its subclasses


interfces  + class = how to get really strong code reusable in TS.
*/

class Vehicle{
	color : string;
	
	constructor(color : string){
		this.color = color;
		
	}
	
	
  public start() : void {
	  console.log('starting');
  }
  protected drive() : void{
	  // this method is inherited
	  console.log('driving');
	  
  }	  
  
  private honk() : void{
	  // this method is not inherited
	  console.log('honking');
  }
	
}

// Inheritance
class Car extends Vehicle{
	
	// public wheels : number another way of defining new instance variable in class.
	constructor(public wheels : number, color : string){
		super(color);
	}
	
	
	protected drive() : void{
	   console.log('car driving');
	   
	}
	
	public startDrivingProcess() : void{
		this.drive();
	}
	
	
	
}


const vehicle = new Vehicle('orange');
console.log(vehicle.color)

vehicle.start();
// vehicle.honk();
//vehicle.drive();
const car = new Car(4, 'yellow');   // parent constructor is called if car class does not have constructor
car.startDrivingProcess();
console.log(car.color)
console.log(car.wheels);



