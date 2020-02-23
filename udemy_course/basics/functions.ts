/*

type annotations for functions:
    code we add to tell typescript what type of arguments a function will receive and what type of values it will return

type inference for functions:
    typescript tries to figure out what type of value a function will return (typeinference only works around return value from function not on arguments)

*/

// arrow function
const add = (a: number, b: number): number => a + b;

const subt = (a: number, b: number): number => a - b;

// named function
function divide(a: number, b: number): number {
  return a / b;
}

// anonymous function
const multiply = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  // function return type declared as void can return null or undefined both works
  //   return null;
  //   return undefined;
};

const throwError = (message: string): never => {
  //never  indicates that the function is not going to reach till end and in between it will throw an error

  throw new Error(message);
};

const mayThrowError = (message: string): string => {
  // return type is string because here we atleast expect it to return string
  if (!message) {
    throw new Error(message);
  }
  return message;
};

const mayThrowErrorOther = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

const forecast = {
  date: new Date(),
  weather: "sunny"
};

const logWeather = (forecast: { date: Date; weather: string }) : void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(forecast);


// ES2015 destructuring with annotations
const logWeatherOther = ({date, weather}: { date: Date, weather: string}) : void => {
  console.log(date);
  console.log(weather);
};

