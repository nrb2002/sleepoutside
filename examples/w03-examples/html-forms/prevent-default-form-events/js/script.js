// event.preventDefault() within the event listener, it will prevent the default thing from happening. 
// In this case, the button will not redirect us.

// Let's do an example where before we redirect the user, we first wanted to ask them for some information.

const registerLink = document.querySelector(".register");

registerLink.addEventListener("click", function(event){
    console.log(`You just clicked on "Sign in!"`);
    event.preventDefault();
    
    // This allows you to conditionally redirect the user based on the value of redirect
    const redirectPage = confirm("The page you are trying to view is protected. Do you want to proceed? ");

    if(redirectPage){
        window.location = event.currentTarget.href; 
        //event.currentTarget.href will give you the value of the href attribute which is the url you need to redirect the user to manually.
    }
    console.log(redirectPage);

});
