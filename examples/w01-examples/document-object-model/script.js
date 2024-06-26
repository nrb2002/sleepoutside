//To manipulate an element inside the DOM, you first need to select it and store a reference to it inside a variable.
const link = document.querySelector("a");

//Let's change the text inside the link by updating the value of the Node.textContent property
link.textContent = "Mozilla Developer Network";

//We should also change the URL the link is pointing to, so that it doesn't go to the wrong place when it is clicked on.
link.href = "https://developer.mozilla.org";

//Creating and placing new nodes

//let's start by grabbing a reference to our <section> element
const sect = document.querySelector("section");

//Now let's create a new paragraph using Document.createElement() and give it some text content in the same way as before
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";

//append the new paragraph at the end of the section using Node.appendChild()
sect.appendChild(para);

//Finally for this part, let's add a text node to the paragraph the link sits inside, to round off the sentence nicely. 
//First we will create the text node using Document.createTextNode():
const text = document.createTextNode(" - the premier source for web development knowledge.");

//Now we'll grab a reference to the paragraph the link is inside, and append the text node to it:
const linkPara = document.querySelector("p");
linkPara.appendChild(text);

//add inline styles directly onto elements you want to dynamically style. This is done with the HTMLElement.style property, which contains inline styling information for each element in the document.
para.style.color = "white";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";

const body = document.querySelector("body");
body.style.textAlign = "center";
body.style.alignItems = "center";

//Let's try another common way to dynamically manipulate styles on your document
//we will set a css class name of highlight (see css stylesheet) on our paragraph:
const para2 = document.createElement("p");
para2.textContent = "At least, we tried. ";
para2.setAttribute("class", "highlight");

//Attach new paragraph to sectione
sect.appendChild(para2);

/*
The first method takes less setup and is good for simple uses, whereas the second method is more purist 
(no mixing CSS and JavaScript, no inline styles, which are seen as a bad practice)good for larger and more involved apps.
*/

//Build a dynamic shopping list
/*
In this challenge we want to make a simple shopping list example that allows you to dynamically add items to the list using a form input and button. 
When you add an item to the input and press the button:

The item should appear in the list.
Each item should be given a button that can be pressed to delete that item off the list.
The input should be emptied and focused ready for you to enter another item.
*/
const ul = document.querySelector("ul");
const input = document.querySelector("input");
const addBtn = document.querySelector("button");

addBtn.addEventListener("click", () =>{
    let newItem = input.value;
    input.value = "";

    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");

    span.textContent = newItem;
    delBtn.textContent = "Delete";

    span.appendChild(delBtn);
    li.appendChild(span);    
    
    ul.appendChild(li);

    delBtn.addEventListener("click", () =>{
        ul.removeChild(li);
    });
    
    input.focus();
});
