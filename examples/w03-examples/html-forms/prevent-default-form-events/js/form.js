// eslint-disable-next-line quotes
const signupForm = document.querySelector('[name="signup"]');

//When someone submits a form, the event will fire and give you access to the next page
signupForm.addEventListener("submit", function(event){
    const name = event.currentTarget.name.value;
    // event.preventDefault();
    console.log(name);
    console.log(event.currentTarget.email.value);
    console.log(event.currentTarget.agree.checked); //With a checkbox, you don't use .value, you would use .checked

    
    if (name.includes("chad")) {
        alert("Sorry bro");
        event.preventDefault();
    }
    // console.dir(event.currentTarget);    
    
});

// Other Types of Events with Form Inputs

// You have keyup, keydown, focus, blur and a whole bunch of different types.
// Take the signup form name input, and add an event listener that listens to the keyup event.

//The keydown event will tell us what the user had in the input, whereas the keyup event will tell us what the value is.
signupForm.addEventListener("keyup", logEvent); 
signupForm.addEventListener("keydown", logEvent); 
    
function logEvent(event){
    console.log(event.type);
    //Now when you type anything in the name field, you will see keyup getting called many times in the console.

    //You can also log the event.currentTarget.value to get what the user has typed into the input.
    console.log(event.currentTarget.name.value);
    console.log(event.currentTarget.email.value);
}

