// Challenge 5 - label movies as good or bad.

function badOrGoodMovie(movieRating) {
    if (6.1 <= movieRating && movieRating <= 10) { 
        return ('Good Movie')
    } else if (0<= movieRating && movieRating <=6){
            return ('Bad Movie')
    } else { return ('Invalid Rating')}
}
console.log(badOrGoodMovie(9))
console.log(badOrGoodMovie(8))
console.log(badOrGoodMovie(68))
// Bad Movie
// Good Movie
// Invalid Rating


// The first one accounts for user error in case we want to stick to the 0 - 10 scale

function Movie(rating){
    if(rating>=7){return ('Good Movie')
} else {return('Bad Movie')}

}
console.log(Movie(11))
console.log(Movie(3))
//Good Movie
//Bad Movie

// Check if a string is empty
/*
function isEmptyString(aString){
    if (aString == '') { return ('True')
} else {return ('False')}
}
console.log(isEmptyString('hello'))
console.log(isEmptyString(""))
//False
//True
// =================================================
//Find the smallest number in an array
/*
//we are labeling the minimum, and since it is an array we are looking for, we are using the index, which always starts at zero
    for(let i=0; i< numbers.length; i++){ //here we are giving the conditions and telling it to loop through the whole array(numbers.length), checking each number to see if it is smaller than the current minimum. When it finds that to be true, the current minimum will be replaced with that smaller number.
function findMin(numbers){
    let minimum = numbers[0] 
        if (numbers[i] < minimum){
            minimum = numbers[i]
        }
    } return minimum
}
    console.log(findMin([5,2,9,8,7,3]))
    console.log(findMin([4,1,9,6,7,5]))
    console.log(findMin([5,8,9,8,7,3]))
*/

/*
function findMin(numbers){
    let minimum = numbers[0]
    for(i=0; i<numbers.length; i++){
        if (numbers[i] < minimum) {
            minimum = numbers[i]
        }
    } return minimum
}

console.log (findMin([7,3,9,1,5,0]))
console.log (findMin([7,3,9,4,5,8]))
console.log (findMin([7,8,9,2,5,4]))
//console shows
//0
//3
//2

//the two arrays above are the same(now). I rewrote the function because I could not figure out why it was not working. The console was displaying the first number in the array instead of the smallest. The second version worked without problem. As i reviewed the code, I noticed that I had the return statement between the wrong brackets. That is something I need to watch for in for loops.*/

//if statements only run if something is true. What is happening in the loop, for the first one below, is it's checking the first number in the array, which is 3, so that is the max, then it loops through again to seven and determines that 7 is greater than 3, so that is the new maximum, then it loops back through and checks to see if 7 is greater than 9. It is not, so 9 becomes the new max. It loops through again and determines that 0 is not greater than 9, so 9 remains the max, etc.
function findMax(numbers){
    let maximum = numbers[0]
    for(let i=0; i<numbers.length; i++){
        if (numbers[i] > maximum) {
            maximum = numbers[i]
        }
    } 
    return maximum
}
console.log(findMax([3,7,9,0,1,2]))
console.log(findMax([6,7,9,5,10,2]))
console.log(findMax([3,7,8,0,1,2]))
//console showed
// 9
// 10
// 8