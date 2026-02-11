function validateForm(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if(name === "" || email === ""){
        alert("Please fill all fields");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
