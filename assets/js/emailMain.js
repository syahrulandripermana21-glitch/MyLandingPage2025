const btn = document.getElementById('buttonKirimEmail');

document.getElementById('email-form').addEventListener
('submit', function(event) {
    event.preventDefault();

    btn.value = 'sending...';

    const serviceID = 'service_j9603c1';
    const templateID = 'template_mbcjlya';

   emailjs.sendForm(serviceID, templateID, this)
   .then(() => {

    btn.value = 'send email';
    alert('email berhasil terkirim!');

   }, (err) => {

    btn.value = 'send email';
    alert(JSON.stringify(err));

   });

});