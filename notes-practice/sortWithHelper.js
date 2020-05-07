//DRY principle
//note that the findMaxHelper and the sortBestWithHelper have a lot of the some code. Below it I will combine some of the code 

/*
function findMaxHelper(numbers){
    

    let maximum = numbers[0]     
    for(let i=0; i<numbers.length; i++) {
        if (numbers[i]> maximum) {//this is the "if" condition
            maximum = numbers[i] //this is the "if" statement REMEMBER:  IF STATEMENTS ONLY RUN IF THE CONDITION IS TRUE.
        }
    }
    return maximum

}

function sortBestWithHelper(numbers){
    //find max
    for (let j=0; j < numbers.length -1; j++) {
         maxNum = numbers[j];
         maxLocation= j; 
     
         for(let i=j; i<numbers.length; i++) { 
             if (numbers[i]> maxNum) {
                 //know max and its location (index location)
                 maxNum = numbers[i] 
                 maxLocation = i
             }
         }
   
         //swap the first and the last
         numbers[maxLocation] = numbers[j]//==> 10
         numbers[j] = maxNum
     }
     return numbers
 
 }
 console.log (sortBestRatingsFirst([5, 8, 2, 9, 3, 10]))
 console.log (sortBestRatingsFirst([ 10, 9, 8, 5, 3, 2 ]))

*/
//=======================================================================================
 //below here is the code that is above turned into simpler code.

 function findMaxHelper(numbers, start){ //we have added a property of a starting index
    let maximum = numbers[start]  
    let maxLocation = start

    for(let i=start; i<numbers.length; i++) {
        if (numbers[i]> maximum) {//this is the "if" condition
            maximum = numbers[i] //this is the "if" statement REMEMBER:  IF STATEMENTS ONLY RUN IF THE CONDITION IS TRUE.
            maxLocation = i
        }
    }
    return {maxNumber: maximum, maxIndex: maxLocation} //note that this is just a key value pair.
}
/*console.log(findMaxHelper([5,2,9,3,7], 0))
result { maxNumber: 9, maxIndex: 2 } --meaning that the max number is 9, and the index location of the max number(9) is 2--because index starts counting at 0.
*/

console.log(findMaxHelper([5,2,9,3,7], 3))
//result { maxNumber: 7, maxIndex: 4 } the max number is now 7 because we changed the start index number to three, so it does not even begin the count until index 3 (which happens to be number 3) and then it shows the index location of the max number, the max number of 7 is at index 4.

function sortBestWithHelper(numbers){
    
    //run as many times as there are items
    for (let j=0; j < numbers.length -1; j++) {
 
        //find max number and max location, starting from j
        max = findMaxHelper(numbers, j)
        maxNum = max['maxNumber']
        maxLocation = max['maxIndex']
         
    
   
         //swap the first and max item in an array
         numbers[maxLocation] = numbers[j]//==> 10
         numbers[j] = maxNum

     return numbers
    }
 }
 console.log(sortBestWithHelper([6,2,9,3,7]))
 console.log(sortBestWithHelper([5,2,0,3,7]))
 console.log(sortBestWithHelper([1,2,9,4,7]))

/*results
[ 9, 2, 6, 3, 7 ]
[ 7, 2, 0, 3, 5 ]
[ 9, 2, 1, 4, 7 ]
*/