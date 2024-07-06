// Test to see if the browser supports the HTML template element by checking
// for the presence of the template element's content attribute.
const addBtn = document.querySelector("#addProduct");

addBtn.addEventListener("click", () => {
    if("content" in document.createElement("template")){
        //Instantiate the table with the existing HTML tbody
        //and the row with the template
        const tbody = document.querySelector("tbody");
        const template = document.querySelector("#productRow");
    
        //CLone the new row and insert it into the table
        const clone = template.content.cloneNode(true);
        let td = clone.querySelectorAll("td");
        td[0].textContent = "123456789";
        td[1].textContent = "Stuff";
    
        //Append first row to the table body
        tbody.appendChild(clone);
    
        // //CLone the new row and then append to table
        // const clone2 = template.content.cloneNode(true);
        // td = clone2.querySelectorAll("td");
        // td[0].textContent = "0810548945";
        // td[1].textContent = "Baron Tshibasu";
    
        // //Append first row to the table body
        // tbody.appendChild(clone2);  
    
    }else{
        //If the template element is not supported, find a different way to add rows to the table
    }
});
