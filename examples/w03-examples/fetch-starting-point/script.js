/*
This stores references to the <select> and <pre> elements and adds a listener to the <select> element, so that when the user selects a new value, the new value is passed to the function named updateDisplay() as a parameter.
*/
const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.addEventListener("change", () => {
    const verse = verseChoose.value;
    updateDisplay(verse);    
});

//Let's define our updateDisplay() function.
function updateDisplay(value){
    /**
     * Convert the selected value to the text file's name by converting the 'V' to lower case, 
     * removing the space, and adding ".txt" on the end.
     */
    //Remove space + turn to lowercase
    const fileName = value.replace(" ","").toLowerCase();
    //Pass the converted select value to the url to match the relevant text file
    const url = `data/${fileName}.txt`;
    

    //Call fetch, passing the url
    //fetch returns a promsie
    fetch(url) 
        //once the response received from the server, the then handler is called with the response
        .then((response) => { 
            //If the request fails throw an error
            if(!response.ok){
                throw new Error (`HTTP error: ${response.status}`);
            }
            //otherwise, fetch the response's body as a text and return the promise
            return response.text();
        })
        //Then copy the text response into the poemDisplay box
        .then((text) => {
            poemDisplay.textContent = text;
        })
        //Otherwise display any further error message
        .catch((error) => {
            poemDisplay.textContent = `Could not fetch verse: ${error}. `;
        });
}
