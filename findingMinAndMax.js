//We will expect the following (for example) from the function findMin below:
//findMin([5,3,9,2,6,4]) should return 2, findMin([5,0,9,2,6,4]) should return 0, etc.

function findMin(numbers){

    let minimum = numbers[0]     
    for(let i=0; i<numbers.length; i++) {
        if (numbers[i]< minimum) {
            minimum = numbers[i]
        }
    }
    return minimum
}
console.log (findMin([5,3,9,2,6,4])) //showed 2
console.log (findMin([5,0,9,2,6,4])) //showed 0
console.log (findMin([5,8,9,7,6,4])) //showed 4

/* Here is the logic behind this algorithm: 
1. We have to label the minimum. We pick some kind of minimum, which is usually just the first number in the array
2. Loop through the array and check to see if the current item is less that the current minimum.
3. If true, replace the current min with the current item.
====
See the breakdown below for each step of the function.  


/*A for loop is a good choice for this solution because it will iterate through each number, compare it to the one after it, constantly finding the new minimum. Let's take this array as an example: [5,3,9,2,6,4]. The first time it runs through it, the current min is the first number in the array, which is 5, because it has nothing to compare it to, yet.The second time it runs through the array it will compare 5 to 3 to determine which is a lower number. Since 3<5, the new minimum is 3, then it iterates through and compares 3 and 9. Since 3<9, 3 is still the minimum. Then it compares that current min of 3 to 2. Since 3 > 2, then the new minimum is 2. Then 2, as the new minimum, is compared to 6, and since 2<6, 2 is still the current min. Then it compares the current min of 2 to the last number in the array, which is 4. Since 2<4, 2 is the final minimum. 

function findMin(numbers){//note that the param is plural(numbers). Usually a plural suggests we are expecting an array or an object with multiple items. Also note that the function has () and the parameter in the () is numbers. And we open with an opening curly brace.

let minimum = numbers[0]//referring back to the logic in our array, we know we need to label the minimum. Since we know this will be an array, we know we will use square brackets, and since the array index numbering starts at zero, we just create the minimum variable and call it numbers[]. So we are just saying that the current minimum will be the first number in the array.    
for(let i=0; i<numbers.length; i++) {//this line says to run only as many times as there are items in the "numbers" array. The i<numbers.length is the condition put in place to stop the loop from running. 
    if (numbers[i]< minimum) {//this line is the condition, and the condition must always go in parens. That condition is that IF the current item in the loop (which we have named with a variable of "i") is less than the minimum------ after the condition we do an open curly brace indicating the action that will be taken or the information that will be given...see the line below: 
        minimum = numbers[i]//this is the line between the curly braces that gives the instructions. This is saying that if the condition above is true, then the minimum is equal to the current item. So that means that the current item in the numbers array  is going to be the minimum. Because remember that the minimum could change along the way. Maybe the first item (the current min) will still be the current min after it loops through the array. For example if we have array [5,6,7,8,9], the first in the array is 5. It will still loop through and will find that 5 is still the min. But if there is a lower number in the array, that becomes the new current min.  
    }
}
return minimum //note that the variable minimum is equal to numbers[0]
}//we console log the name of the function and feed it the array.  
console.log (findMin([5,3,9,2,6,4])) //showed 2
console.log (findMin([5,0,9,2,6,4])) //showed 0
console.log (findMin([5,8,9,7,6,4])) //showed 4
*/