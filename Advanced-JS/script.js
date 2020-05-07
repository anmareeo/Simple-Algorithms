
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
