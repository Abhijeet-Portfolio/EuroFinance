/* Author: 

*/


//button to top

var toTop = document.querySelector('.to-top');

window.addEventListener('scroll', function () {
    if (window.scrollY >= 10) {
        toTop.classList.replace('hide-to-top','show-to-top');
    }
    else {
        toTop.classList.replace('show-to-top','hide-to-top');
    }
});

//bamburger

var hamburger = document.querySelector('.hambuger');
var navUl = document.querySelector('nav ul');

function hamburgerToggle(hamburger, navUl) {
    hamburger.addEventListener('click', function () {
        navUl.classList.toggle('show');
    });
}

hamburgerToggle(hamburger, navUl);

//form validation

//for first name and last name

var fname = document.querySelector('.fname');
fname.addEventListener('input', function() {validateText(fname);});

var lname = document.querySelector('.lname');
lname.addEventListener('input', function() {validateText(lname);});

function validateText(input) {
    var textRegax = /([a-zA-Z]){1,30}$/;
    var noNumberRegax = /[^a-z]/gi;

    if (input.value == null || input.value == '') {
        if ( input.nextElementSibling.classList.contains('display')) {
            input.nextElementSibling.classList.replace('display','hide');
        }
    }
    else if(!textRegax.test(input.value)) {
        input.nextElementSibling.classList.replace('hide','display');
        input.nextElementSibling.textContent = "Please enter only alphabets";
        input.value = input.value.replace(noNumberRegax,'');
    }
    else {
        if ( input.nextElementSibling.classList.contains('display')) {
            input.nextElementSibling.classList.replace('display','hide');
        }
    }
}

//for email validate

var email = document.querySelector('.email');
email.addEventListener('input', function() {validateEmail(email);});

function validateEmail(email) {
    emailRegex = /^([0-9a-zA-Z\_\.\-]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/;
    if (email.value == null || email.value == '') {
        if ( email.nextElementSibling.classList.contains('display')) {
            email.nextElementSibling.classList.replace('display','hide');
        }
    }
    else if (!emailRegex.test(email.value)) {
        email.nextElementSibling.classList.replace('hide','display');
        email.nextElementSibling.textContent = "Email ID must contain @ and .";
    }
    else {
        if ( email.nextElementSibling.classList.contains('display')) {
            email.nextElementSibling.classList.replace('display','hide');
        }
    }
}

//number validate

var phoneNumber = document.querySelector('.phone');
phoneNumber.addEventListener('input', function() {validateNumber(phoneNumber);});

function validateNumber(input) {
    var numberRegax = /[0-9]$/;
    var noTextRegax = /[^0-9]/gi;

    if (input.value == null || input.value == '') {
        if ( input.nextElementSibling.classList.contains('display')) {
            input.nextElementSibling.classList.replace('display','hide');
        }
    }
    else if(!numberRegax.test(input.value)) {
        input.nextElementSibling.classList.replace('hide','display');
        input.nextElementSibling.textContent = "Phone number must be numbers only";
        input.value = input.value.replace(noTextRegax,'');
    }
    else {
        if ( input.nextElementSibling.classList.contains('display')) {
            input.nextElementSibling.classList.replace('display','hide');
        }
    }
}

//for password

var password = document.querySelector('.password');
var confirmPassword = document.querySelector('.confirm-password');

function passwordCheck() {
    var passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;

    if(password.value === '' || password.value === null) {
        password.nextElementSibling.classList.replace('hide','display');
        password.nextElementSibling.textContent = "This field is required";
        return false;
    }
    else if (!passwordRegex.test(password.value)) {
        password.nextElementSibling.classList.replace('hide','display');
        password.nextElementSibling.textContent = "Password must contain 1 uppercase, 1 special character and numbers";
        return false;
    }
    else {
        if ( password.nextElementSibling.classList.contains('display')) {
            password.nextElementSibling.classList.replace('display','hide');
        }
        return true;
    }
}

function confirmPasswordCheck() {
    if(confirmPassword.value === '' || confirmPassword.value === null) {
        confirmPassword.nextElementSibling.classList.replace('hide','display');
        confirmPassword.nextElementSibling.textContent = "This field is required";
        return false;
    }
    else if (confirmPassword.value != password.value) {
        confirmPassword.nextElementSibling.classList.replace('hide','display');
        confirmPassword.nextElementSibling.textContent = "Password confirmation does not match";
        return false;
    }
    else {
        if ( confirmPassword.nextElementSibling.classList.contains('display')) {
            confirmPassword.nextElementSibling.classList.replace('display','hide');
        }
        return true;
    }
}

// show password checkbox 

var showPassword = document.querySelector('#showPassword');
showPassword.addEventListener('click', function() {
    if (password.type === 'password') {
        password.type = 'text';
        confirmPassword.type = 'text';
    } 
    else {
        password.type = 'password';
        confirmPassword.type = 'password';
    }
});

//submit the form

var submit = document.querySelector('.submit');
submit.addEventListener('click', function(e) {
    e.preventDefault();
    var flag = 0;

    function error(input) {
        if (input.value === '' || input.value === null) {
            input.nextElementSibling.classList.replace('hide','display');
            input.nextElementSibling.textContent = "This field is required";
            flag++;
        }
        else {
            if ( input.nextElementSibling.classList.contains('display')) {
                input.nextElementSibling.classList.replace('display','hide');
            }
            flag = 0;
        }
    }

    error(fname);
    error(lname);
    error(email);
    error(phoneNumber);
    var passwordStatus = passwordCheck();
    var confirmPasswordStatus = confirmPasswordCheck();
    
    if (flag === 0 && passwordStatus && confirmPasswordStatus) {
        document.querySelector('.sign-up form').reset();
    }
});


//clear the form

var clear = document.querySelector('.clear');
clear.addEventListener('click',function (e) {
    e.preventDefault();
    document.querySelector('.sign-up form').reset();
    
    function clearError(input) {
        if ( input.nextElementSibling.classList.contains('display')) {
            input.nextElementSibling.classList.replace('display','hide');
        }
    }

    clearError(fname);
    clearError(lname);
    clearError(email);
    clearError(phoneNumber)
    clearError(password);
    clearError(confirmPassword);

    if(password.type === 'text') {
        password.type = 'password';
        confirmPassword.type = 'password';
    }

});