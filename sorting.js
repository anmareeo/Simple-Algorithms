/* If we want to sort by best rating, we will first run the array through the findMax function. It does not have to be called that, but it will have the same functionality.

function findMax(numbers){

    let maximum = numbers[0]     
    for(let i=0; i<numbers.length; i++) {
        if (numbers[i]> maximum) {//this is the "if" condition
            maximum = numbers[i] //this is the "if" statement REMEMBER:  IF STATEMENTS ONLY RUN IF THE CONDITION IS TRUE.
        }
    }
    return maximum
}
Let's say we have an array of movie ratings and we want to sort them in order from best to worst. Here is what will happen for an array of [4, 3, 7, 2, 8, 10]
It will start at the 0 in the index, which is 4, and it will loop through until it finds the highest one. The highest number will then trade places with the one at index 0, so the array after the first round is
[10, 3, 7, 2, 8, 4]. It has already searched for and found the highest number and put it at the beginning (sorting by highest rating). We know now that 10 is the highest number, so we can leave it out of the next search. [10, 3, 7, 2, 8, 4] is now....
10,     [3, 7, 2, 8, 4]. It now looks for the highest number out of the remaining, and swaps places with the number at the beginning of the new array. so the array [3, 7, 2, 8, 4] becomes[8, 7, 2, 3, 4], which really becomes [7, 2, 3, 4] because we already established that 10 and 8 are highest and second highest, respectively. Now it loops through again to look for the highest number to put at the beginning. The search results in [7, 2, 3, 4] because the next number in place is 7 and that is the highest. We can now take 7 out of the array because we have established it is third highest (10, 8, 7) and the new array is [2, 3, 4]. It loops through and finds that 4 is higher than 2, so it swaps them, giving the new array of [4, 3, 2], and since we have now established that 4 is the fourth highest (10, 8, 7, 4) the new search is [3, 2]. It loops through and finds that 3 is greater than 2, so it does not change from [3, 2], except for now 3 joins the others, established at 5th highest (10, 8, 7, 4, 3). Since there is only one number left, we stop running the loop, and we are left with the final sorted array of [10, 8, 7, 4, 3, 2]. The loop was run 5 times. The more programmatic way to say that is the loop was run length -1 times. (-1 is because the index starts at zero, not one)

So the recipe is:
1. Start loop at index 1 (we don't need to start looping at 0 because that is what we are comparing it to)
2. Find max from the remaining list 
3. Find new max AND know its location.



*/

function sortBestRatingsFirst(numbers){
//sortBestRatingsFirst([5, 8, 2, 9, 3, 10])
//know max AND its index the findMax function we used before, we can use again, but that will only help us find the max. For sorting, we need to also know its location, because we will need to swap places. So we will create another variable called maxLocation to store that location. So as soon as it finishes the if statement (remember the statement only runs if the condition is true), then it will run a second "if" statement of maxLocation = i.  
let maxNum = numbers[0]
let maxLocation;     
    for(let i=0; i<numbers.length; i++) {
        if (numbers[i]> maxNum) {
            maxNum = numbers[i] 
            maxLocation = i
        }
    }
    return [maxNum, maxLocation]

}
console.log (sortBestRatingsFirst([5, 8, 2, 9, 3, 10]))