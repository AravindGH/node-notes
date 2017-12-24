var square = (x) =>{
     var result =x*x;
     return result;
}


//also we can perform like this..
var square1 = (x) => x*x; //instead of this we can remove the braces like this 
var square2 = x => x*x; // this will work, it will evaluate the expression and then return the 
//result, even result statement is not needed.


var user = {
    name: 'Aravind',
    value : 'working',
    //arrow functions behaviour differently for object value binding..
    sayHi :()=>{
       //console.log(argument);
       //instead of binding Aravind, it will say I am undefined..
       //this is referring to the global variables. it will not work in arrow functions.
       console.log(`Hello, I am ${this.name}`);
    },
     //this can be solved by this way..
     sayHiAlt(){
        console.log(`hello, I am working`);
     }

}


console.log(square(2));
console.log(square1(3));
console.log(square2(4));
user.sayHi();
user.sayHiAlt();