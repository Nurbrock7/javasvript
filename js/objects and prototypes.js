// OBJECTS AND PROTOTYPES

// In addition to its special properties , in Javascript object has an internal property called prototype. this is a link to another object. Java script tries to find this properties that does not exsist in an object Javascript tries to find this property in the prototype of this object

var anObject = {
    a:2
};

// create anotherObject usuing anObject as a prototype

var anotherObject =Object.create (anObject) ;

console.log(anotherObject.a) ;

// the Javascript statement Object.create() is used to create the object 'anotherObject' based on the prototype object anObject.

// if the object doesnt have a desired property, then research continues in its own prototype until we get to the end of the prototye chain. if the property was found in objects ,access returns the value undefined.

var anObject ={
    a:2
}

var anotherObject = Object.create(anObject);

console.log(anObject.a);
console.log(anObject.b);


// this type of relationship is called Delegation :
// an object delegates part of its operation to its prototype.

// What is the prototype?

// The prototype property allows you to add new properties and methods to existing object types. Note: Prototype is a global property which is available with almost all JavaScript objects.

var Pastry = { 
    type: "",
    flavor:"",
    layers:"",
    prices:"",
    occassion:"",



describe: function () {

    var description = "The" + this.type + " is a " + this.occassion + " pastry , has a " + this.flavor + "  flavour and cost" + this.price + "."

    return description ;
}
} ;

let muffin = Object.create (Pastry);
muffin.type = " Muffin";
muffin.flavor =" cuppichino";
muffin.layers = " 1" ;
muffin.price = " 10 rand" ;
muffin.occassion = "birthday" ;


var cake = Object.create (Pastry); 
cake.type =" sponge cake";
cake.flavor =" vanilla";
cake.layers = " 2 ";
cake.price = " 500"
cake.occasion = " wedding"

console.log(muffin.describe());
console.log(cake.describe());


// we create an object named pastry, which brings together the properties common to all the characters. the cake and muffin are created a via Pastry as a prototype,  which delegates its features. 

var Pastry = {
    init : function (type,flavor,layers,price,occasion) {
        this.type = type ;
        this.flavor = flavor; 
        this.layers = layers;
        this.price = price;
        this.occasion = occasion;
    },



    describe: function() {

        var description = "The" + this.type + " is a " + this.occassion + " pastry , has a " + this.flavor +   "flavour and cost" + this.price + "." ;
        return description ;
    },


bake : function () {
    var baked = "the" + this.type + "is placed in an oven for 7 minutes. its done"
    return baked ; 
}


};

var muffin = Object.create (Pastry) ; 
muffin.init("muffin", "choc", 1 , "R20" , " Breakfast") ; 

var cake = Object.create (Pastry) ; 
cake.init("cake", "choc", 1 , "R100" , " Tea") ; 

console.log (muffin.bake());
console.log (muffin.describe());
console.log ( cake.describe());



// the method init takes the intial property values of the pastry as parameters. the pastry reation code is therefore reduced to only 2 steps :

// the actual creation with the pastry , objects as a prototype

// the initialization of the properties using the function init() on the pastry Objects.


// project======

// nate is building a eco website and he wants it to look moer modern , beautifil , slick and minimalistic at the same time.the idea is to have a more responsive, interactive and engaging website. by having a website like that, it will help uses /  vistors stay on the site hence the will purchase goods online.

// breif : 
// design is provided. you have to create a website that looks exactly like the design provided
// what is exxpected ? create a new repo and name is properly; create the appropreate files and folder structure ; a beautifully styled ReadMe is a must ; your website must be responsive ; it must be neat , create  look book ; contact ; Must have a book mrker, shop page 

// first su


let muffin = Object.create (Pastry) ;
muffin.init (    "cake", "vanilla", 1 , "R20" , "birthday"
)

let cake = Object.create (Pastry);
cake.init ("cake", "chocolate", 3 , "R100" , "Wedding")

console.log (muffin.describe());
console.log(cake.describe());

