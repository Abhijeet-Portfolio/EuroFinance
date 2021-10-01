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

//modal

var conferences = document.querySelectorAll('.conferences li');
var preview = document.querySelector('.modal');

function modal(conferences, preview) {

    document.querySelector('.modal').addEventListener('click', function() {
        preview.classList.remove('show-modal');
    });
    document.querySelector('.modal div').addEventListener('click', function(e) {e.stopPropagation();});

    var modalDiv = document.querySelector('.modal div')
    for(var conference of conferences) {
        conference.addEventListener('click', function(e) {            
            preview.classList.add('show-modal');
            modalDiv.children[0].src = this.children[0].src;
            modalDiv.children[1].textContent = this.children[1].textContent;
            modalDiv.children[2].textContent = this.children[2].textContent;
            close.addEventListener('click', function() {
                preview.classList.remove('show-modal');
            });
        });
    }
}

modal(conferences, preview);


//form email validation

var email = document.querySelector('.email');
email.addEventListener('input', function() {validateEmail(email);});

function validateEmail(email) {
    emailRegex = /^([0-9a-zA-Z\_\.\-]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/;
    if (email.value == null || email.value == '') {
        if ( email.nextElementSibling.classList.contains('errorShow')) {
            email.nextElementSibling.classList.replace('errorShow','errorHide');
        }
    }
    else if (!emailRegex.test(email.value)) {
        email.nextElementSibling.classList.replace('errorHide','errorShow');
        email.nextElementSibling.textContent = "Email ID must contain @ and .";
    }
    else {
        if ( email.nextElementSibling.classList.contains('errorShow')) {
            email.nextElementSibling.classList.replace('errorShow','errorHide');
        }
    }
}

(document.querySelector('.submit')).addEventListener('click', function(e) {
    e.preventDefault();

    if(email.value === '' || email.value === null) {
        email.nextElementSibling.classList.replace('errorHide','errorShow');
        email.nextElementSibling.textContent = "This field is required!";
    }
    else if (email.nextElementSibling.classList.contains('errorShow')) {
        return;
    }
    else {
        if ( email.nextElementSibling.classList.contains('errorShow')) {
            email.nextElementSibling.classList.replace('errorShow','errorHide');
        }
        document.querySelector('.sign-up form').reset();
    }
    
});















