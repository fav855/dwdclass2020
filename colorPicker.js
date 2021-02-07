const body = document.body;
const button = document.querySelector("button");
const textBox = document.getElementById('text');

let listOfColors = ['blue', 'green', 'yellow', 'pink', 'gold', 'lightblue', 'magneta', 'red', 'purple', 'violet']

console.log(listOfColors)
//functions
// randomm numbers
// rgba colors

function changeColor(array){

    let number = Math.floor( 0 + Math.random() * array.length)
    console.log(number);

    return array[number]
};
changeColor(listOfColors)
console.log(changeColor(listOfColors))

button.onclick = function(){
let colorName = changeColor(listOfColors)

    body.style.backgroundColor = `${colorName}`
    textBox.innerHTML = colorName;
};
//Assignment
//Generate RGB colors instead of using the listOfColors array 
//break down function into two, first function will give you the random number

function generateRandomNo(){
    return (Math.floor(0 + Math.random()))
}
console.log(generateRandomNo());
function rgbColors(){
    let col1 = generateRandomNo()
    let col2 = generateRandomNo()
    let col3 = generateRandomNo()

    let newColor = `rgb(${col1}, ${col2}, ${col3})`
    return newColor;
}
console.log(generateRandomNo());
