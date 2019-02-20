// loops are repeated statments. we can make the code run over and over without stopping.

// differernt types of loops : "WHILE" and "FOR" loops. 

// a WHILE loop lets you repeat code while the conditon is true

// before loop interation the condtion in the parenthesis us evaluated to determine whether its true or not . the code is assosiated with a loop is called its bod

// yif condtions are true , the code in the while' loop body runs. afterward the condition is reevaluated to see if its still true or not. 

// if the conditon is false, the looop will stop. 

// ===FOR LOOPING====
// you will often need to write loopa with conditons that are based on what happpens in the loop body.

// for (iniatialization; condition; final - expression) {
    // code to run when conndition is true}

    // ====*

    // This is a little more complicated than loop syntax 
    // initialization only happens once when the code first kicks off.

//  the conditon is evaluated once before the loop run each time. if its true, the code runs ,if not the code will not run.

// final expressions is evaluated after the loop runs each time =. its used to update the counter variable as we saw in the loop ,example

for (var counter = 1 ; counter <= 5 ; counter ++) { 
    console.log (counter) ;
}



// =====Which loop should i use ?====


let letter = "" ;
while (letter !== "x") {
    letter = prompt("type any letter or X to exit:");
    console.log (letter);
}

// console.log ("start program") ;
// console.log (1,2,3,4,5,6,7,8,9, 10) ;


// let number = 1 ;
// while (number <=10) {
//     console.log (number) ;
//     number ++;
// }
// console.log ("end program") ;

// basic syntax ======

