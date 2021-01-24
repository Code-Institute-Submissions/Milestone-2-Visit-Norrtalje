(function() {
            emailjs.init('user_xNMqk1zEghwvFrbJlZbHU');
        })();

// code copied directly from emailjs.com

window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // generate a five digit number for the contact_number variable
                this.contact_number.value = Math.random() * 100000 | 0;
                // these IDs from the previous steps
                emailjs.sendForm('contact_visit', 'contact_form', this)
                    .then(function() {
                        console.log('SUCCESS!');
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
                    // clear form inspired by https://www.geeksforgeeks.org/how-to-clear-form-after-submit-in-javascript-without-using-reset/
                    document.getElementById('first_name').value=''; 
                    document.getElementById('last_name').value='';
                    document.getElementById('from_email').value='';
                    document.getElementById('phone').value='';
                    document.getElementById('message').value='';
            });
        };
        