AOS.init();

new Typed("#typed", {
  strings: [
    "Software & Systems Architect",
    "Automotive Toolchain Expert",
    "HPC & Calibration Systems Specialist"
  ],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});

(function(){
emailjs.init("YOUR_PUBLIC_KEY");
})();

document.getElementById("contact-form")
.addEventListener("submit", function(e){
e.preventDefault();

emailjs.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",this)
.then(function(){
alert("Message Sent Successfully!");
}, function(){
alert("Message Failed.");
});
});
