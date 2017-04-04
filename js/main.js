var contactButton = document.querySelector('.contact-me-btn');
contactButton.addEventListener("click", function() {
   document.body.classList.add("modal-opened");
    
}, false);


var closeButton = document.querySelector('.close-btn');
closeButton.addEventListener("click", function() {
    document.body.classList.remove("modal-opened");    
    
}, false);

document.addEventListener("keyup", function(evt) {
    if (evt.keyCode === 27) {
        document.body.classList.remove("modal-opened");
    }
    
}, false);