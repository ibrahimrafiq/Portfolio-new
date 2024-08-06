function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.width === "250px") {
    sidebar.style.width = "0";
  } else {
    sidebar.style.width = "250px";
  }
}
(function(){
  emailjs.init("_qGr18V5j9KBhr8Dg");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get form data
  var formData = new FormData(this);
  var messageContent = "Name: " + formData.get('user_name') + "\nEmail: " + formData.get('user_email') + "\nMessage: " + formData.get('message');
  
  // Create the email parameters
  var templateParams = {
      from_name: formData.get('user_name'),
      to_name: 'Ibrahim Rafiq',
      message: messageContent
  };

  emailjs.send('service_kwdqx5n', 'template_uye4unq', templateParams)
    .then(function() {
      document.getElementById('form-response').innerHTML = 'Message sent successfully!';
    }, function(error) {
      document.getElementById('form-response').innerHTML = 'Failed to send message. Please try again.';
    });
});