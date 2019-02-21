// ====Objects=======

// Thinnk Objects in non-programming sense, like a pen. A pen has different ink colours, manufacaturinng and people, have a different drip

// similarly an object in programming is an entity that has properties. Each property has deefine characteristics of an object. A property can be infomation 



// JS and Objects

// like many other langusges, JS invloves programming objects so we can say its an object -orientated languages it provides a number of predefined objects while letting you create your own.
// let pen = {
//     type: "fine" ,
//     manufacture: "Bic" , 
//     price : "r20"
// }

// console.log (pen.type, pen.price) ;

let pen = {
    brand :" Parker",
    type :" Fine ball point",
    price :" R500",
    colour:" black ink"
}

console.log ("Today i bought a" + pen.brand + pen.colour + pen.type + " pen at the Gucci store at the price of" + pen.price)

let cake = {
    flavour :" Red Valvet cheesecake",
    price:" R1000.",
    layers:" 4",
    occasion:" Wedding"
} ;

cake.occasion = " birthday"
cake.layers =" 5"

console.log ("Good Morning Sir/Mam. I have baked your" + cake.occasion + " It is a " + cake.flavour + " at the price of" + cake.price + " It has" + cake.layers + " and its the best cake i've ever made."  )


// ===========OBJECTS AND METHODS==============

// Methods are actions that can be performed on objects.

// Object properties can be both primitive values, other objects, and functions.

// An object method is an object property containing a function definition.

// Objects are Parameters as well.

function describe (cake) {
    var description = "the" + cake.occasion + " cake has a " + cake.flavour + " flavour" + cake.layers + "layers and costs" + cake.price + "." ;
    return description;
}

console.log (describe(cake)) ;



let cake2 = {
    flavour :" Red Valvet cheesecake",
    price:" R1000.",
    layers:" 4",
    occasion:" Wedding" ,

 describe : function () {
    var description = "the" + this.occasion + " cake has a " + this.flavour + " flavour" + this.layers + "layers and costs" + this.price + "." ;

    return description;

 }

}
// 
cake2.flavour = " Chocolate"
cake2.layers =" 10"
cake2.occasion = " Anniversary"

console.log(cake2.describe());



let intern ={
    fName : " Moegamat-Nur",
    lName:" Brock",
    position :" Junior Web Developer",
    salary : " 10 000",
    workplace: " CBD",
    times : " 9-5",

    describe : function () {
        var description = "You"+ this.fName + this.lName + " have been accecpted as a" + this.position + "." + "You will be earning a salary of" + this.salary + "." + "You will be working in the " + this.workplace + "." + "Your work hours will be a " + this.times + "." + "I cannot wait to for you to join our team!" ;

        return description ;
    }


}

console.log (intern.describe()) ;   