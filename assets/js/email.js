function sendMail(contactForm) {
    let tempParams = {
        from_name: document.getElementById("firstname").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("outlook","template_s7nocct", tempParams).then(function(respond){
        console.log("success",respond.status);
    })
  }