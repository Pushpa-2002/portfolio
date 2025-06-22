
const roles = ["Frontend Developer", "Web Developer"];
const dynamicText = document.getElementById("dynamic-text");

let index = 0;  
let isDeleting = false; 
let textIndex = 0;  


  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('.navbar');

  menuIcon.onclick = () => {
    navbar.classList.toggle('active');
  };


function updateText() {
    const currentRole = roles[index];

    if (!isDeleting) {
        // Typing effect: Add one character at a time
        dynamicText.textContent = currentRole.slice(0, textIndex + 1);
        textIndex++;

        if (textIndex === currentRole.length) {
            // When the text is fully typed, start deleting
            isDeleting = true;
            setTimeout(updateText, 1500); // Wait before deleting
            return;
        }
    } else {
        // Deleting effect: Remove one character at a time
        dynamicText.textContent = currentRole.slice(0, textIndex - 1);
        textIndex--;

        if (textIndex === 0) {
            // When the text is fully deleted, move to the next word
            isDeleting = false;
            index = (index + 1) % roles.length; // Loop through roles
        }
    }

    setTimeout(updateText, 200); // Speed of typing and deleting
}

// Start the typing effect
updateText();

// email.js
emailjs.init('Ko8ZFaD34NIksvY_J'); // Replace with your public key

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form-right");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    // Send form using EmailJS
    emailjs.sendForm("service_ct6yb9e", "template_ezestjb", this)
      .then(() => {
        // Success popup
        alert("✅ Message sent successfully!");
        form.reset(); // Clear form after send
      })
      .catch((error) => {
        // Failure popup
        alert("❌ Failed to send message.\n" + error.text);
      });
  });
});

// JavaScript to set the active link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150; // adjust this offset if needed
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});






