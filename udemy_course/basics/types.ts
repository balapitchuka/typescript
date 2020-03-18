/*Notes

1. If a value is used and datatype is not mentioned at the time of declaration, then typescript will infer the type of variable
2. If a value is not used and single declared a variable without type , then typescript will use 'any' type to it 

  Eg:  Following example is valid
       let x;
       x = 2
	   x = 'helloworld'
	   

*/



let isDone : boolean = true;
console.log(isDone, typeof(isDone));

let age : number = 34;
console.log(age, typeof(age));


let name : string = "Iron man";
console.log(name, typeof(name));

let x: any = 2;   // can assign any value
x = "dhoni"
console.log(x, typeof(x));


let y: [string, number] = ['test', 2];
console.log(y, typeof(y));


console.log(`name : ${name}, age : ${age}, isdone : ${isDone}`);


const city  = "Newyork";
console.log(city, typeof(city));

const wish :  undefined = undefined;
console.log(wish, typeof(wish));

let colors : Array<string> =  ['red', 'blue', 'green', 'yellow']
colors.push('orange')
console.log(colors, typeof(colors))




export {};
