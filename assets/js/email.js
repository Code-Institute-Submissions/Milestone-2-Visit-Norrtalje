function sendMail(contactForm) {
    let tempParams = {
        from_name: document.getElementById("firstname").value,
        from_name: document.getElementById("message").value,
    };

    emailjs.send("outlook","template_vwfbcte", tempParams).then(function(respond){
        console.log("success",respond.status);
    })
  }