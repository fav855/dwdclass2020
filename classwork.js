//Class work
//Q1
let testArray = [3, 5, 6, 7, 8, 9]

function findArray(array) {
    let firstNum = array[0];
    let lastNum = array[array.length - 1]

    return[firstNum, lastNum]
}

console.log(findArray(testArray))

//Q2
function containsNum(array, num){
    return array.includes(num)
}

console.log(containsNum(testArray, 5));

// Q3
//many params can be represented using a spread operator
function sumAll(...args){
    return acc + num
}

console.log(([2,3,4].reduce(sumAll)));

//Q4
//angles

function missingAngle(angle1, angle2){
    let result = 180 - (angle1 + angle2)

    if(result < 90){
        return 'acute'
    } else if(result == 90){
        return "right"
    }
    return "obtuse"
}
console.log(missingAngle(10, 30))