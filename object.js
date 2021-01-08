// 1st way of object creation
function createPerson(){
    var person = new Object();
    // Blank object = {} Eg: var person = {}; 
    person.name = " Gaurav";
    person.designation = " Student";
    person.phno = 6643;
    return person;
}


//2nd way of object creation
function createPerson2(){
    var person = {
        name: " Gaurav",
        designation:  " 2nd - Student",
        phno : 6643
    };
    
    return person;
}

// 3rd way of object creation with function
function Person(){
    this.name = "Gaurav Parmar";
    this.age = 21;
}

var person = new Person();
alert("Your name is : " + person.name + "\n Your age is : " + person.age);
var gaurav = createPerson2();