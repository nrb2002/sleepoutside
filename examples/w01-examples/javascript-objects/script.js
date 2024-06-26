//You can declare a class using the class keyword. Here's a declaration for the Person class
class Person{
    //Properties section
    name;

    //Constructor section
    constructor(name){
       this.name = name;
    }

    //Methods section
    introduceSelf(){
        console.log(`Hi! I'm ${this.name}`);
    }

}

/*
This declares a class called Person, with:

a name property.
a constructor that takes a name parameter that is used to initialize the new object's name property
an introduceSelf() method that can refer to the object's properties using this.

The name; declaration is optional: you could omit it, and the line this.name = name; 
in the constructor will create the name property before initializing it. 
However, listing properties explicitly in the class declaration might make it easier for people reading your code to see which properties 
are part of this class.

*/

//Given the class declaration code above, you can create and use a new Person instance like this:
const giles = new Person("Giles");
giles.introduceSelf();  // Hi! I'm Giles

//If you don't need to do any special initialization, you can omit the constructor, and a default constructor will be generated for you:

class Animal{
    sleep(){
        console.log("zzz");
    }
}

console.log("This is an object built from a class without special initialization:");

const spot = new Animal();
spot.sleep(); //zzz

//Inheritance
//Given our Person class above, let's define the Professor subclass.
class Professor extends Person{
    teaches; //unique property to this new class that derives from Person

    constructor(name, teaches){
        super(name);
        this.teaches = teaches;
    }

    //new methods unique to this class
    introduceSelf(){
        console.log(
            `My name is ${this.name}, and I will be your ${this.teaches} professor.`,
        );
    }

    grade(paper){
        const grade = `My paper is worth ${Math.floor(Math.random()*(5-1)+1)} credit(s).`;
        console.log(grade);
    }
}

console.log("This is an object created from inheritance:");

const walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf();
walsh.grade("my paper");

/*
Encapsulation

Finally, let's see how to implement encapsulation in JavaScript. 
We would like to make the year property of Student private, so we could change the rules about archery classes without breaking any code 
that uses the Student class.
*/
class Student extends Person{
    #year;

    constructor(name, year){
        super(name);
        this.#year = year;
    }

    introduceSelf(){
        console.log(
            `Hi! I'm ${this.name}, and I'm in year ${this.#year}.`
        );
    }

    canStudyArchery(){
        return this.#year > 1; //return true only if year above 1
    }
}

/*
In this class declaration, #year is a private data property. 
We can construct a Student object, and it can use #year internally, 
but if code outside the object tries to access #year the browser throws an error:
*/
console.log("This is an object using a private property:");

const summers = new Student("Summers", 2);

summers.introduceSelf();
summers.canStudyArchery(); //returns true
//summers.#year; //syntax error