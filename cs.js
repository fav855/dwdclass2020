//conditional branching
//if statement ,conditional operator?

//if(condition == true){

// }
//let year = prompt("In which year did Joe Biden become the president of the United States of America?")

//if(year == 2021){
   // alert("You are correct!")
   // alert("You are so smart")
//} else{
   // alert("not so fast!")
//}
function checkEligibility(){
    
let age = document.getElementById('age').value;
let msgBox = document.getElementById('errorMsg')

if(age < 18){
    msgBox.style.color = 'blue'
    msgBox.innerText = "You are to young"
} else if(age > 65){
    msgBox.style.color = 'yellow'
    msgBox.innerText = "Please get a driver"
}else{
    msgBox.style.color = 'green'
    msgBox.innerText = "You are old enough to drive"
}
}
//Greeting message
let name = prompt("Enter your name")
let greetingBox = document.getElementById("greeting")
let today = new Date()
let currentHour = today.getHours()
let greeting;

if(currentHour >= 18){
    greeting =  `Good Evening  ${name}`
} else if(currentHour >= 12){
    greeting =  `Good Afternoon  ${name}`
} else if( currentHour > 6){
    greeting = `Good morning ${name}`
}else {
    greeting = `${name} what are you doing up!?`
}
greetingBox.innerHTML = greeting;

//Assignment
//Create two input boxes and 2 buttons and a screen
//1st button will be a move button while the second button will be a show button
// Move text from the first input box to the second input box
// then from the second input box show the text on the screen