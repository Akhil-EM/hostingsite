let check = false;

function alertshow() {
    alert("fhgjhgfjhgfjh");
}

function validate_user(form) {
    alert("fhgjhgfjhgfjh");
    var name_len = form.name.value.length;
    var emailreg = /\S+@\S+\.\S+/;
    var passreg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var d = new Date();
    var n = d.getFullYear();
    var dob = form.dob.value.substring(0, 4);
    var pass = form.password.value;
    var cpass = form.Cpassword.value;
    var email = form.email.value;
    var pno = form.phone.value;

    if (passreg.test(pass) == false) {
        alert("password must meet minimum requrements specified");
    } else if (pass != cpass) {
        alert("password and confirm passwords are not matching");
    } else if (emailreg.test(email) == false) {
        alert("not a valid email");
    } else if (dob > (n - 10)) {
        alert("you must be at least 10 year old")
    } else if ((pno.length) != 10) {
        alert("in valid phone no");
    }
}