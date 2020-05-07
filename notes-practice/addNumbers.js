//Challenge 1 - create a function that adds the numbers 2 and 5

function addNumbers(num1, num2){
  return (2 + 5)
 }
console.log (addNumbers())



function add() {
    let n1 = 2
    let n2 = 5
    return (n1 + n2)
}
console.log(add())

function adding(nbr1, nbr2) {
  return nbr1 + nbr2
}
console.log(adding(2,5))
console.log(adding(4,9))
console.log(adding(112,5))
console.log(adding(2,5))


//Challenge 2 - Convert Minutes to Seconds

function minSec(){
  let sec = 60
  let min = sec * 1
  return min
}
console.log(minSec())

function minutesToSeconds(mins){
  return mins * 60

}
console.log(minutesToSeconds(1))

// Challenge 3: Your Age in seconds
function ageInSeconds(age) {
  let secondsPerYear =  3.154e+7
  return age * secondsPerYear

}
console.log(ageInSeconds(45))

function ageInSecs(age) {
  let years = 365
  let months = years * 12
  let days = months * 30
  let hours = days * 24
  let minutes = hours * 60
  let seconds = minutes * 60
  return seconds 
}
console.log (ageInSeconds(45))

function ageSeconds (age) {
  return age * 12 * 30 * 24 * 60 * 60
}
console.log(ageSeconds(45));

// Challenge 4 - return first item in an array

let colors = ['blue', 'pink', 'red', 'purple']
console.log (colors[0])



function myColors(items){
  
  return items[0]
}
let stuff = ['blue', 'pink', 'red', 'purple'] 
console.log(myColors(stuff))

//in both cases console showed 1419300000