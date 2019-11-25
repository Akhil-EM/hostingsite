let check = false;

function alertshow() {
    alert("fhgjhgfjhgfjh");
}

function validate_user(form) {
       var emailreg = /\S+@\S+\.\S+/;
      var pass = form.password.value;
       var email = form.email.value;
        if (emailreg.test(email) == false) {
        alert("not a valid email");
        }
       else if(pass.length<5)
       {
           alert("password length not correct");
       }
    
}