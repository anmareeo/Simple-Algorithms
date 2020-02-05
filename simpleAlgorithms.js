// Challenge 5 - label movies as good or bad.

function badOrGoodMovie(movieRating) {
    if (6.1 <= movieRating && movieRating <= 10) { 
        return ('Good Movie')
    } else if (0<= movieRating && movieRating <=6){
            return ('Bad Movie')
    } else { return ('Invalid Rating')}
}
console.log(badOrGoodMovie(4))
console.log(badOrGoodMovie(6.5))
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

//the two arrays above are the same(now). I rewrote the function because I could not figure out why it was not working. The console was displaying the first number in the array instead of the smallest. The second version worked without problem. As i reviewed the code, I noticed that I had the return statement between the wrong brackets. That is something I need to watch for in for loops.