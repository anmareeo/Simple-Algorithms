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
// function findMax(numbers){
//     let maximum = numbers[0]
//     for(let i=0; i<numbers.length; i++){
//         if (numbers[i] > maximum) {
//             maximum = numbers[i]
//         }
//     } 
//     return maximum
// }
// console.log(findMax([3,7,9,0,1,2]))
// console.log(findMax([6,7,9,5,10,2]))
// console.log(findMax([3,7,8,0,1,2]))
// //console showed
// 9
// 10
// 8
// ============================================== 
// Challenge 9 sorting


// start loop at index one because we are comparing the second number to the first to see which is bigger.  we will find the new max and its location


/*
function sortBestRatingsFirst(numbers){
    for (let j =0; j< numbers.length - 1; j++){
    let maximum = numbers[j];
    let maxLocation = j;
    //below is the inner loop. we need to create an outer loop in order to have the loop repeat.
    for(let i=j; j<numbers.length; i++){
        if (numbers[i] > maximum) {
            maximum = numbers[i]
            maxLocation = i
        }
      } 
    // swap the first and the last
    numbers [maxLocation] = numbers[j]
    numbers[j] = maximum
    }
    return numbers
}   
    console.log(sortBestRatingsFirst([5,6,3,2,9,8]))
    */
    // ==============================================
    // We copied the code above, but we are going to change it a bit. First, we rename them. The sortBestWithHelper function finds the location. We are going to give that functionality to the findMaxHelper. Also, sometimes we want to start at differen locations in the index, so we are adding another param called start
function findMaxHelper(numbers, start){
    let maximum = numbers[start]//we change this from 0 to start
    for(let i=start; i<numbers.length; i++){
    if (numbers[i] > maximum) {
        maximum = numbers[i]
        maxLocation = start;//we change this from i to start. this replaces the j helper in the other function that found not only the max number but also its location
        }
    } 
    //below we will return an object with key value pairs
    return {maxNumber: maximum, maxIndex: maxLocation}
}

console.log(findMaxHelper([5, 2, 9, 3, 7], 0))
// shows {maxNumber: 9, maxIndex: 2} so it found both the max number, and where it is located...at index 2 because index starts at 0, not 1. We can replace the code. See below when we switch the starting point from 0 to 3.
console.log(findMaxHelper([5, 2, 9, 3, 7], 3))
// shows {maxNumber: 7, maxIndex: 4}. Even though the max in the array is nine, we told it to start the count at index three. So the highest after index three is 7, and then it showed its location, which is 4.

// now we can change the code below a bit.  

   
        function sortBestWithHelper(numbers){
            
                //we no longer need the two lines of code below
         /*   let maximum = numbers[j];
            let maxLocation = j;*/
           // This not only finds the max number, but also the max location,

// find max
            max = findMaxHelper(numbers, j)
            maximum = max['maxNumber']
            maxLocation = max['maxIndex']

//we no longer need the loop below
            for (let j =0; j< numbers.length - 1; j++){
        /*    for(let i=j; j<numbers.length; i++){
                if (numbers[i] > maximum) {*/
//swap the numbers. Swapping still needs to take place. 
                    maximum = numbers[i]
                    maxLocation = i}
        return numbers
}
console.log(sortBestWithHelper([5,6,3,2,9,8]))  
console.log(sortBestRatingsFirst([5,6,3,2,9,8]))            

