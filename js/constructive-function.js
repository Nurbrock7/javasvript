// // to create an object using  constructive functions, we simply write a standable function cintaining theinit fucntionality that we want for our objects. instead of calling it inti, this function will have thr name of our object "Class"

// // pastry is the object and type...etc is the paramater or properties

// let Pastry  = {
// init: function ( type, flavor , levels, prices , occasion) {
//     this.type = type;
//    this.flavor= flavor;
//    this.levels = levels;
//    this.prices = prices;
//    this.occasion = occasion; 
//   }

// //   instead using the code above, we creatwe a function and make the code short to call the properties.

// }
// // it will be like  this :

// let pastry = ( type, flavor , levels, prices , occasion) 
//   this.type = type;
//  this.flavor= flavor;
//  this.levels = levels;
//  this.prices = prices;
//  this.occasion = occasion; 


// // Now to , inatantiate it ,instead of calling and then an init function. we will simply do :

// // new Pastry (type, flavor, levels, prices, occasion,)

// // What about the other function that was by defined by our pastry object./, though? Remember that our Pastry had a "describe" function :

// // This is where the Prototype come in again.

// // Remeber that the Pastry objects an in the previouse example serves as the prototype for all the Paastries we have created. All the functions like the INIT and describe that we defined on the obect were automatically avavliablke on all the pastries because we passed the pastry in to the Object. create whe we created them.

// // Using the contructive fucnrtion is slightly different thoubgh we cant just add properties to our Pastryconstructor (one word) fucntion and expect them yo be present on the init instances of our classes, because cobbntructor arent the same thing as the prototype of the objects they create.

// // Noe that we have using a constructive function , we will assign our describe fucnions to the Pastry prototype like this :



//     Pastry.prototype.describe = function () {
//     let description = "The" + this.type + " is a " + this.occasion + " pastry, has a " + this.flavor + "flavour" + this.levels + "layers, and cost " + this.prices + "." ;
//     return description;
// }


// let muffin = Object.create (Pastry) ;
// muffin.init (    "cake", "vanilla", 1 , "R20" , "birthday"
// )

// let cake = Object.create (Pastry);
// cake.init ("cake", "chocolate", 3 , "R100" , "Wedding")

// console.log (muffin.describe());
// console.log(cake.describe());
// //

// // let muffin = new Pastry ("muffin" , "blueberry" , 1 , "R20" , "breakfast");
// let cake = new Pastry ("cake" , "chocolate" , 2 , "R100", "birthday");

// console.log(muffin.describe());
// console.log (cake.describe());



// // New Contructive Function------------



// let Intership = (type , salary, place , time, starting, company )
 

// this.type = "Junior Web Developer"; 
// this.salary = "R50 000";
// this.company = " At Google";
// this.time = " 9:00"
// this.date = "04/04/19";
// this.place = "Cape Town CBD"


// Intership.prototype.describe = function ()
// {
//     let description = 
// }

// console.log (Intership());



// var Intership = { 
//     type: "",
//     salary:"",
//     company:"",
//     time:"",
//     date:"",
//     place:"",



// describe: function () {

//     var description = "Good Morning Nur. You will begin as a " + this.type + "and earning a salary of" + this.salary +  "." + " you will be starting at our company" + this.company + " on the date of" + this.date + " at the time of" + this.time + " in the area of the" + this.place + "."
//     return description;
// }
// } ;

// let job = Object.create (Intership);
// job.type = " Junior Web Developer"; 
// job.salary = " R50 000";
// job.company = " At Google";
// job.time = " 9:00"
// job.date = " 04/04/19";
// job.place = " Cape Town CBD"


// console.log(job.describe());



// // ========Task========


// var part = Object.create(Car); 

// part.type1 =" turbo  charger" ;
// part.type2 = "new engine";
// part.price1 = " R5000";
// part.price2 =" R23 000";
// part.place = " Cape Town CBD" ;
// part.time = " 9:00 to 17:00";

// console.log (part.describe());


     function Car (type1,type2,price1,price2,place,time) {
        this.type1 = type1 ;
        this.type2 = type2; 
        this.price1 = price1;
        this.price2 = price2;
        this.place = place;
        this.time = time;
    }

    Car.prototype.describe = function() {
        let description = "The car we aquired is a " + this.type1  + "it has a hefty prices of " + this.price1 + "." + "the second car we have aquired is a" + this.type2 + " and its price is much less than the"  + this.type1 + "." + "you are allowed to see the cars at" + this.place + "at" + this.time + "." + "I thank you."
        
        return description
    }

    let item = new Car ("Electric" , 1000000 , "a Diesel car" , "Electric car" , 9 , "CBD") ;
    let item2 = new Car (" Hybrid" , 10000000 , "Electric car" , "hybrid" , 10 , "Camps Bay"); 

    console.log (item.describe());
    console.log (item2.describe());