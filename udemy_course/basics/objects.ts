const profile = {
    name : 'alex',
    age : 20,
    coords : {
        lat : 0,
        long : 12
    },
    gender : "male",
    weight : 160,
    setAge(age : number) : void {
           this.age = age;
    }
};


// destructuring with objects using es2015 syntax

// const age =  profile.age;
const { age } = profile;


const { name } : { name : string} = profile;   // const {name } : string = profile; is wrong

const { coords : {lat, long} } : { coords : { lat : number, long : number}} = profile;
// with plain destructuring
// const {coords : { lat, long} }  =  profile;   

const { gender, weight}  : { gender : string, weight : number}= profile;

export {};