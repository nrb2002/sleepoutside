/**
 * We are going to use a fairly simple free API called pokeapi. 
 * If you visit that website you will find the documentation on how to request data, and examples. 
 * Let's use the example it has to pull information about the Pokemon Ditto.
 * 
 */
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;

/**
 * Declare a function as an asynchronous function with the async keyword, then put our code inside of that. 
 * This is not a big drawback since we really should have put this in a function anyway ;)
 * Once we have done that we can instruct Javascript to delay moving to the next line by using the await keyword. 
 */
async function getPokemon(urlApi){
    const response = await fetch(urlApi);
    //Check if fetch rqn successfully
    if(response.ok){
        //The API will return JSON data, so wait for response and then convert response to .json()
        const data = await response.json();
        doStuff(data);
    }    
}
/**
function doStuff(res){
    results = res;
    console.log("first", results);
}
     */
function doStuff(res) {
    results = res;
    console.log("first: ", results);
    results.abilities.forEach((ability) => {
      const div = document.createElement("div");
      div.textContent = ability.name;
      document.querySelector("main").appendChild(div);
        // assumes you have a <main> element in your HTML document
    });
  }


getPokemon(url);
console.log("second", results);

/**
 * Run the code above then check out the console. 
 * Note that the second console.log ran first...then the first one. 
 * Remember that in async programming Javascript does not wait for everything to finish before moving on. 
 * If we had tried to use 'data' immediately it would have failed. 
 * nstead we control the execution of functions to make sure that 'data' is ready BEFORE we use it.
 */




