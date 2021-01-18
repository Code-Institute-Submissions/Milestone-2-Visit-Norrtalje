(function() {
emailjs.init("user_xNMqk1zEghwvFrbJlZbHU");
})();


function sendMail(contactForm) {
    emailjs.send("outlook", "Norrtalje", {
        "from_name": contactForm.firstname.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            alert("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}
