function findMin(numbers){
    let minimum = numbers[0]     //we have the square brackets because it's  an array  
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

