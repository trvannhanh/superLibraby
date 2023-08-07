/* LOGIN SCRIPT */
document.addEventListener("DOMContentLoaded", function() {
    let signupBTN = document.getElementById("signupBTN");
    let signinBTN = document.getElementById("signinBTN");
    let nameField = document.getElementById("nameField");
    let title = document.getElementById("title");

    signupBTN.onclick = function() {
        nameField.style.maxHeight = "60px";
        title.innerHTML = "Đăng Ký";
        signupBTN.classList.remove("disable");
        signinBTN.classList.add("disable");
    };

    signinBTN.onclick = function() {
        nameField.style.maxHeight = "0";
        title.innerHTML = "Đăng Nhập";
        signupBTN.classList.add("disable");
        signinBTN.classList.remove("disable");
    };
});
/* LOGIN SCRIPT END */