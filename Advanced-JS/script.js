
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
/*
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

/*
//the for in loop above loops through the keys of the object, but it only shows the keys, not the corresponding values. To dig deeper into the object, we can use bracket notation. Dot notation will not work because the object contains a list(user Hobbies). If the hobbies were in the form of key value pairs such as: 
// firstHobby: "drumming"
// secondHobby: "decorating"
// thirdHobby: "eating" ...then we could use dot notation. 
//Since user Hobbies pulls up an array, dot notation will not work. Bracket notation specifically says, "you need to find a key that has a certain variable, a certain string that is a variable (in this case the variable is prop)See below:

for(let prop in user) {
    console.log(user.prop)
}
*/
/*
console shows:
undefined
undefined
undefined
undefined
undefined 
*/
/*
for(let prop in user) {
    console.log(user[prop])
}
/* console shows:
Anmaree
Osmond
[Function: setPassword]
[ 'drumming', 'decorating', 'eating' ]
[Function: getFullName]
=============================================================
*/

/* 
Everything is an object! Almost. Simple strings are just that--a string with no functionality(a primitive). Just a string (whatever is in quotes), but through what is called coercion, if we add a piece of functionality to the end, such as .length, that string is immediately transformed into an object. suddenly it has functionality. So it's just a string until we need it to have functionality. It's another thing to study up on. I believe this is unique to javascript. Keeping it in string form saves space
=====================================================================
*/
/*
CLASSES
-a template for creating objects, providing initial values, and implementing methods
-encourages reusability
Example:
for example below X stands for an attribute and f(x) stands for a method/function

Class Car
X: make
f(x): drive(hp) -- in the parenthesis is a property of horsepower
f(x): unlock()

The above class is a template, and below is an object created with that template

Object Audi(Car)
X: make = Audi
f(x): drive(500) -- in the parentheses is the horsepower of the Audi
f(x): unlock()

So from the Class of Car, many objects (cars) can easily be created.

within a class is something called a constructor method. A constructor method initializes the values. The constructor method is the first thing that gets called the second you create an object using the class. It's the first thing that gets called automatically. 
Below is how it works. 


*/
/*
class User{
    constructor(firstName, lastName, userHobbies) {//in the parentheses we are passing in values(keys that represent values) or parameters
        this.firstName = firstName;
        this.lastName = lastName;
        this.userHobbies = userHobbies
    }
}

//Now from the User class (template) that was created above, we will create a new object below.

let Anmaree = new User("Anmaree", "Osmond", ["drumming", "drawing"])
console.log(Anmaree)

/* dev console shows:
User {firstName: "Anmaree", lastName: "Osmond", userHobbies: Array(2)}
firstName: "Anmaree"
lastName: "Osmond"
userHobbies: Array(2)
0: "drumming"
1: "drawing"
length: 2
__proto__: Array(0)
__proto__: Object

*/
//now to add some functionality 
class User{
    constructor(firstName, lastName, userHobbies) {//in the parentheses we are passing in values(keys that represent values) or parameters
        this.firstName = firstName;
        this.lastName = lastName;
        this.userHobbies = userHobbies
    }
    getFullName= () => {
        return `${this.firstName} ${this.lastName}`

    }
}

let Anmaree = new User("Anmaree", "Osmond", ["drumming", "drawing"])
console.log(Anmaree)//see above for console info
console.log(Anmaree.getFullName()) //shows Anmaree Osmond in the console
//now below we will add another user based on the User class

let Zak = new User("Zak", "Gregory", ["motocross", "singing"])
console.log(Zak)
/* console shows
User {firstName: "Zak", lastName: "Gregory", userHobbies: Array(2), getFullName: ƒ}
firstName: "Zak"
getFullName: () => {…}
lastName: "Gregory"
userHobbies: Array(2)
0: "motocross"
1: "singing"
length: 2
__proto__: Array(0)
__proto__: Object
*/
//=======================================================


/* CLASS INHERITANCE

Class Inheritance allows us to extend data and methods from another class. So with our car example, if we have a truck that has all of the attributes and methods of a car, but it has some in addition to those, we can create a new class with just those unique properties. That way we don't have to create an entirely new template just to add a few more items.

Below is the Car Class
Class Car
X: make
f(x): drive(hp) 
f(x): unlock()

Here is a new class
Class Pickup extends Car
X: towCapacity
f(x): towMode()

Essentially what we are saying is that we want everything in the car class, and on top of that, we want to add data and methods that a truck might have

So what we see when we try to create an object is the stuff that is in both classes:

Object Ford(Pickup)
X: make = Ford
X: towCapacity = 1k
f(x): towMode()
f(x): drive(500) 
f(x): unlock()


Keeping this in mind, we will go back to our class User example. We will create an admin user that has all the data a user has, but it has some additional info.

*/

class AdminUser extends User {
    setPassword = (password) => {
        this.password = password
    }
}

let Jason = new AdminUser("Jason", "Jones", ["dancing", "dining"])
console.log(Jason)

/* dev console shows:
AdminUser {firstName: "Jason", lastName: "Jones", userHobbies: Array(2), getFullName: ƒ, setPassword: ƒ}
firstName: "Jason"
getFullName: () => {…}
lastName: "Jones"
setPassword: (password) => { this.password = password }
userHobbies: (2) ["dancing", "dining"]
__proto__: User
constructor: class AdminUser
__proto__: Object

so notice that the setPassword Function is included along with the rest of the info.
*/