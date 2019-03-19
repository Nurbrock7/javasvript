// NEVER TRUST USER INPUT

// it is vital to validate user input before sending it ti a serverland (again once it arrvies there but let things one step at all)

// Validation can be as simple as making sure that the ttype of data is correct (number vs strings, valid email address etc ) it can also be more complex-checking for password strength 

// During input 

const passwordInput = document.getElementById('password-input');
const submitButton = document.getElementById('submit-button');
const confirmPassword = document.getElementById ('confirm-passwordv ');
const errorMsg= document.getElementById('error-message');


confirmPassword.addEventListener('blur') , () => {
    if(passwordInput.value === confirmPassword.value) {
        passwordInput.style.border = 'solid green';
        confirmPassword.style.border = 'solid green';
        errorMsg.style.display = 'none';

    }
    else {
        passwordInput.style.border = 'solid red' ;
        confirmPassword.style.border = 'solid red' ;
        errorMsg.style.display = 'inline';
    }
}


// The input event is triggered wheneveer the user enters data into a given <input> element. We can us this to checke data as it is entered 

// After input 

// add blur event listener to the confirmPassword element 

//  Compare the value properties of both parties 


// If they are the same set the border style to thin solid green and set the display style of errorMsg so that it disappears

// of they are different set the border styles to solid red and set the display styles of the errorMsg so that it appears