(function() {
        emailjs.init("user_xNMqk1zEghwvFrbJlZbHU");
        })();

function sendMail(contactForm) {
    let tempParams = {
        from_name: document.getElementById("firstname").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("outlook","template_s7nocct", tempParams).then(function(respond){
        console.log("success",respond.status);
    })
  }

  
<script type="text/javascript">
   (function(){
      emailjs.init("YOUR_USER_ID");
   })();
</script>