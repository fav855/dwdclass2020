// get the elements 
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const passwordStrength = document.querySelector('.innerbar')


form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    checkInputs()

    try{
        checkStrength("12345abcaaaAAA")
    }
    catch(error){
        console.log(error)
    }
})


function checkInputs(){
    //get the inputs from the user input fields 

    const usernameValue = username.value.trim() //trim removes whitespaces 
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()


    //checks
    if(usernameValue === ""){
        //show error message 
        //add error class 
        setErrorFor(username, "Username can not be blank")
    } else {
        setSuccessFor(username, "successful!")
    }

    //check for email
    if(emailValue === ""){
        setErrorFor(email, "Email can not be blank")
    }else if(!validEmail(emailValue)){
        setErrorFor(email, "Email is not valid!")
    } else {
        setSuccessFor(email, "successful")
    }

    //check for password 1
    if(passwordValue === ""){
        setErrorFor(password, "Password can not be blank")
    } else if( passwordValue.length < 8 ){
        setErrorFor(password, "Password should be more than 8 characters")
    } else {
        setSuccessFor(password, "")
    }


    //password 2 check
    if(password2Value === "" || passwordValue.length < 8){
        setErrorFor(password2, "Password check cannot be blank")
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2, "Passwords do not match")
    } else {
        setSuccessFor(password2, "Passwords match!")
    }
}

//handles errors
function setErrorFor(field, message){
    const formControl = field.parentElement;
    const small = formControl.querySelector('small')

    //add error message inside the small tag
    small.innerText = message;

    //add error class
    formControl.className = "form-control error"
}

//handle success
function setSuccessFor(field, message){
    const formControl = field.parentElement;
    const small = formControl.querySelector('small')

    //add success message and styling
    small.innerText = message;

    formControl.className = "form-control success"
}
//regEx to validate email characters 
//Note that this validation should be replicated on the server side

function validEmail(email){
    const re = /\S+@\S+\.\S/

    return re.test(String(email).toLowerCase())
}
//password strength

function checkStrength(passwordVal){
    let strength = 0
    // upper and lowercase characters
    if(passwordVal.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
        strength += 1
    }
    //check for numbers
    if(passwordVal.match(/([0-9])/)){
        strength += 1;
    }
    //check for special characters
    if(passwordVal.match(/([!,%,&,@,#,$,^,*,?,_,~])/)){
        strength +=2
    }

    if(passwordVal.length > 7){
        strength += 1;
    }
    if(strength < 1){
        passwordStrength.style.backgroundColor ='red'
        passwordStrength.style.width = '15%'
    }else if(strength === 3){
        passwordStrength.style.backgroundColor ='purple'
        passwordStrength.style.width = '45%'
    }else if(strength >=4){
    passwordStrength.style.backgroundColor ='red'
    passwordStrength.style.width = '90%'
}
}
