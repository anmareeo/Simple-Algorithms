
/**
 * Let & Const
 */

// function letVarExample(){

//   if(true){
//     var firstName = "Nazariy";      // exists in function scope, defined in function scope

//     let lastName = "Dumanskyy;"     // exists in block scope, defined in block scope
//   }

//   console.log("Function Scope Access: ", firstName);
//   console.log("Function Scope Access: ", lastName);

// }

// letVarExample()

// const anotherExample = [1,2,3];
// anotherExample.push(4);
// console.log(anotherExample);


/**
 * Template Literals
 */

// let firstName = "Nazariy";
// let lastName = "Dumanskyy";

// let fullName = `${firstName} ${lastName} `;
// console.log(fullName);

// let searchResults = 50;
// let output = `${ searchResults > 0 ? `${searchResults} results` : "No search results"}`
// console.log(output);



/**
 * Arrow Functions
 */

// getFullName = () => {
//   let firstName = "Nazariy";
//   let lastName = "Dumanskyy";
//   return `${firstName} ${lastName}`;
// }

// let output = getFullName();
// console.log(output);

// let firstName = "Nazariy";
// let lastName = "Dumanskyy";
// getFullNameShorter = (firstName, lastName) => console.log(`${firstName} ${lastName}`);
// console.log("Shorted Example");
// getFullNameShorter(firstName, lastName);


/**
 * Default Parameters
 */

//  sortBy = (sortType = "Name", users) => {
//    console.log("Sorting By: ", sortType);
//  }

//  sortBy();
//  sortBy("Date", []);


/**
 * Iterating
 */

//let fruits = ["apple", "banana", "orange", "cherries", "jackfruit", "guava"];
// console.log("For Loop:");
// for(let index = 0; index < fruits.length; index++){
//   console.log(fruits[index]);
// }

// console.log("For-Of:");
// for(let fruit of fruits){
//   console.log(fruit);
// }


// console.log("forEach:");
// fruits.forEach((fruit) => {
//   console.log(fruit);
// })

//console.log("Map:");
//newFruits = fruits.map((fruit) => { //creating a new array out of the fruits array. 
//console.log(fruit);
//})
/**console.log returned
 * Map:
apple
banana
orange
cherries
jackfruit
guava
 */
/** 
console.log("Map:");
newFruits = fruits.map((fruit) => {
return fruit;
}).filter((value) => {  //adding a filter function
    if(value == "banana") {
        return false;
    } else {
    return true;
    }
})
console.log(newFruits)
*/
//returned the following
//Map:
//[ 'apple', 'orange', 'cherries', 'jackfruit', 'guava' ]
//====================================================
/**
/**
 * Destructuring Objects -- this allows us to extract data from arrays/objects

let fullName = {
	firstName: "Nazariy",
	lastName: "Dumansktyy"
}

 * Here is the long way of extracting it.
let firstName = fullName.firstName
let lastName = fullName.lastName
console.log(firstName)
returned Nazariy
 
 let { firstName, lastName } = fullName; //easier way to create the fullName object and extract items in the object
 console.log(lastName)
// returned Dumansktyy

*/
/*
let user = [ //note that user is an array
{
    firstName: "John", //the first item in the array is an object that includes the firstName and lastName. this is index 0
	lastName: "Reilly"
	}, //the comma separating the items in the array
	(user) => { //note that the second item in the user array is a function. this is index 1
    console.log("I set the user: ", user);
	}
] 
//below is how we can deconstruct the above.
let [newUser, setUser ] = user; //newUser gets set to the above object(index 0), and setUser gets set to the function (index 1)
console.log(newUser); //returns { firstName: 'John', lastName: 'Reilly' }
setUser({ firstName: "Cool", lastName: "Stuff"});
console.log(setUser)
//this console.log returned the following:
//I set the user:  { firstName: 'Cool', lastName: 'Stuff' }
//[Function]

//============================================================================
//here is another example of deconstructing an object
let [fruit1, fruit2, fruit3] = ["apple", "banana", "orange", "cherries", "jackfruit", "guava"]
console.log(fruit2)
//this returned banana, because fruit2 matches up with the order of the fruit array it equals
===============================================================================
*/
/*
Object-Oriented Programming (OOP)
-a method of programming...it has nothing to do with the programming language
-organizing software around data and objects
-combining related attributes and functions into container objects

Example: a car object contains methods (functions) and attributes:
-methods(functions): drive, park, reverse, lock
-attributes: colore, make, model, year, engine
Method is just another word for function

OOP is crucial to learn as a programmer
-encourages organization
-easy to maintain
-reusable
-allows us to build large applications

Objects = a container of data(attributes) and methods(functions)
the data is represented using key value pairs typed in the format of ...
key:value pair property
Key = a simple string that represents a property. a key is ALWAYS a string
Value = the string, number, etc that goes with the key--if the key is the question, the value is the answer.
example

The object is a user
key(firstName): John(value)
each key value pair must be separated by a comma
*/

let user = {
    firstName: "Anmaree",
    lastName: "Osmond",
    setPassword: (user,password) => {
        user.password = password;
    },
    "user Hobbies": [
        "drumming",
        "decorating",
        "eating"
    ],
    getFullName: (user) => {
        return `${user.firstName} ${user.lastName}`
    },
}

console.log(user)
/*console shows:
{
  firstName: 'Anmaree',
  lastName: 'Osmond',
  setPassword: [Function: setPassword],
  'user Hobbies': [ 'drumming', 'decorating', 'eating' ],
  getFullName: [Function: getFullName]
}
*/

/*
below is another way to create an object, but it's more work. best to use the former way.
let user = new Object({
    firstName: "Anmaree",
    lastName: "Osmond",
    setPassword: (user,password) => {
        user.password = password;
    },
    "user Hobbies": [
        "drumming",
        "decorating",
        "eating"
    ],
    getFullName: (user) => {
        return `${user.firstName} ${user.lastName}`
    },
})

console.log(user.getFullName(user))
//console shows: Anmaree Osmond
console.log(user.firstName); 
//console shows: Anmaree
//dot notation won't always work. bracket notation is more reliable
console.log(user["lastName"]) 
//console log shows: Osmond
//bracket notation - this always works, for example above "user Hobbies" is not a variable with key value pairs. It's just a list. The values fall into the same category of Hobbies, so it's an array, 
console.log(user["user Hobbies"])
//console shows: [ 'drumming', 'decorating', 'eating' ]
//dot notation would not work here.
//to see if a certain value exists in the object, we can use an if statement
if("firstName" in user) {
    console.log("firstName exists")
}
//console shows: firstName exists
// the above translated to English is:
// If the information in the parentheses is true, then show the text "firstName exists" . To clarify, what is being asked, within the parentheses, is "Is 'firstName' one of the key values in the user object"

//now for an if, else statement
if("randomAttr" in user) {
    console.log("randomAttr exists");
} else {
    console.log("randomAttr does not exist")
}
//console log accurately shows: randomAttr does not exist
// the above translated to English is:
//if the user object contains a key value of "randomAttr" then show the text "randomAttr exists", but if no such value exists, then show the text "randomAttr does not exist"

//the if and if else are commonly used in object oriented programming
/*
for(let prop of user) {
    console.log(prop)
}
*/
//the for loop above gives the error "user is not iterable" the keyword "in" needs to be used when trying to access data within this object. 
for(let prop in user) {
    console.log(prop)
}
/*console shows:
firstName
lastName
setPassword
user Hobbies
getFullName
*/
//the for in loop above loops through the keys of the object, but it only shows the keys, not the corresponding values. To dig deeper into the object, we can use bracket notation. Dot notation will not work because the object contains a list(user Hobbies). If the hobbies were in the form of key value pairs such as: 
// firstHobby: "drumming"
// secondHobby: "decorating"
// thirdHobby: "eating" ...then we could use dot notation. 
//Since user Hobbies pulls up an array, dot notation will not work. Bracket notation specifically says, "you need to find a key that has a certain variable, a certain string that is a variable (in this case the variable is prop)See below:

for(let prop in user) {
    console.log(user.prop)
}
/*
console shows:
undefined
undefined
undefined
undefined
undefined 
*/

for(let prop in user) {
    console.log(user[prop])
}
/* console shows:
Anmaree
Osmond
[Function: setPassword]
[ 'drumming', 'decorating', 'eating' ]
[Function: getFullName]
*/



