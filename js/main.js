/* ------------- EMAIL FORM --------------------*/
function sendEmail(){
Email.send({
    Host : "smtp.gmail.com",
    Username : "rahelsabahamm@gmail.com",
    Password : "fangirl99 ",
    To : 'rahelsabaham@gmail.com',
    From : document.getElementById('email').value,
    Subject : document.getElementById('subject').value,
    Body : document.getElementById('msg').value
}).then(
  message => alert("message success!!")
);
}

