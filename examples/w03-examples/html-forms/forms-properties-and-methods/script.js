// Document forms are members of the special collection document.forms.
// That’s a so-called “named collection”: it’s both named and ordered. We can use both the name or the number in the document to get the form.
// document.forms.my; // the form with name="my"
// document.forms[0]; // the first form in the document


const p = document.querySelector("p");
p.textContent = `Please checkout the console to see what's going on on JavaScript side. `;

//get form1
let form = document.forms.form1;

//get the element
let elem = form.elements.one;

// alert(elem.value);

/**
 * There may be multiple elements with the same name. This is typical with radio buttons and checkboxes.
    In that case, form.elements[name] is a collection. For instance:  
 */
let form2 = document.forms[1];
let age = form2.elements.age;

// alert(age[0]); // [object HTMLInputElement]

// A form may have one or many <fieldset> elements inside it. 
// They also have elements property that lists form controls inside them.
let form3 = document.forms.form3;
// alert(form3.elements.login); // <input name="login">

let fieldset = form3.elements.userFields;
// alert(fieldset); // HTMLFieldSetElement

// // we can get the input by name both from the form and from the fieldset
// alert(fieldset.elements.login == form3.elements.login); // true

// There’s a shorter notation: we can access the element as form[index/name].
// In other words, instead of form.elements.login we can write form.login.
// That also works, but there’s a minor issue: if we access an element, and then change its name, then it is still available under the old name (as well as under the new one).
// That’s easy to see in an example:
let form4 = document.forms.form4;

// alert(form4.elements.login == form4.login); //true

form4.login.name = "username"; //updated input login name
// alert(form4.elements.login); //undefined
// alert(form4.elements.username); //input

// form allows both names: the new one and the old one
//alert(form4.username == form4.login); // true

//Using select and option
//al three lines do the same thing
// all three lines do the same thing
let form5 = document.forms.form5;

form5.select.value = "banana";
// alert(form5.select.options[2].selected); // true
// alert(form5.select.selectedIndex); // 2;
// please note: options start from zero, so index 2 means the 3rd option.

//Get all selected values from multi-select
let form6 = document.forms.form6;
let selected = Array.from(form6.select.options)
                        .filter(option => option.selected)
                        .map(option => option.value);

alert(selected); //blue, rock