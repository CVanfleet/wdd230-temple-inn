function messageSent(){
    document.querySelector("input.send-message").setAttribute('value', "Message Sent");
    fname.value = "";
    lname.value = "";
    email.value = "";
    comments.value = "";
};

document.querySelector("form#contact-us-form").addEventListener('keydown', isValid);


function isValid(){
    if(fname.checkValidity() && lname.checkValidity() && email.checkValidity() && comments.checkValidity()){
        document.querySelector("input.send-message").disabled = false;
    };
};


