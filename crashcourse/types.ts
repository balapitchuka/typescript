
// Types

// Boolean
let isDone : boolean = false;
console.log(isDone);

// Number
let decimal : number = 78;
let hexadecimal : number = 0xff12;
let binary : number = 0b0011;
let octal : number = 0o1234;


//String
let color : string = 'red';

let fullName : string = 'Nina Dobrev';
let age : number = 28;
let message :  string = `Hello, my name is ${fullName}.
                          
I'm ${age} years old.`



//Array

let listNum : number[] = [23, 56, 89, 200];
let prime : Array<number> = [2, 3, 5, 7, 11];
/*
let colors : string[];
let boolArr : boolean[];
*/
let colors : Array<string> = ['red', 'blue', 'yellow'];
let boolArr : Array<boolean> = [false, true, false];


//Tuple

let value : [string, number] = ['sachine', 34];
console.log(`${value[0]} is ${value[1]} years old`);

//Enum
enum Color { Red, Blue, Green};
let varColor : Color = Color.Blue;


/* Default numbering of members starts at 0.
   Change default numbering by manually setting 
   the value of one of its members or changing all its members.
*/


enum ColorModified { Red=2, Blue, Green};
let varColor1 : ColorModified = ColorModified.Green;

enum ColorModified1 { Red=2, Blue=34, Green=100};
let varColor2 : ColorModified1 = ColorModified1.Red;

let colorName :  string = ColorModified[34];


//Any , used for opting-out of type checking
let notSure : any = 4;
notSure = "may be a string instead";
notSure = true;

let listArr : any[] = [23, "sachin", true];
listArr[2] = 100;

notSure.ifItExists();  //okay, ifItExists might exist at runtime
notSure.toFixed();    //okay, toFixed exists (but the compiler doesn't check)


// let prettySure : Object = 4;
// prettySure.toFixed();  //Error: Property 'toFixed' doesn't exist on type 'Object'.



/* Void   , uses as an absence of having any type at all
useful for return type of functions that donot return a value */

function warnUser() :  void {
    console.log("You gonna be punished for your crimes");
}

let unusable : void = undefined;  // not useful , because we can only assign undefined or null to them


//Null and Undefined
/* */

let u : undefined = undefined;
let n : null = null;











