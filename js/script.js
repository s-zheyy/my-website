window.addEventListener("scroll", function () {
      var navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
      } else {
          navbar.classList.remove("scrolled");
      }
  });

  document.querySelectorAll('.dropdown-submenu a.dropdown-toggle').forEach(item => {
    item.addEventListener('click', function (e) {
        let submenu = this.nextElementSibling;
        if (submenu) {
            e.preventDefault();
            submenu.classList.toggle('show');
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".slider-wrapper img");
    let index = 0;
    const totalImages = images.length;
    const fadeDuration = 2000; // 1 second fade effect
    const displayTime = 4000; // 3 seconds per image

    function showNextImage() {
        // Hide current image
        images[index].style.opacity = "0";

        // Move to next image
        index = (index + 1) % totalImages;

        // Show next image
        images[index].style.opacity = "1";
    }

    // Set initial image visibility
    images.forEach((img, i) => {
        img.style.position = "absolute";
        img.style.transition = `opacity ${fadeDuration}ms ease-in-out`;
        img.style.opacity = i === 0 ? "1" : "0";
    });

    // Auto change images every few seconds
    setInterval(showNextImage, displayTime);
});


// Load navbar and footer dynamically
document.addEventListener("DOMContentLoaded", function () {
    fetch("/navbar.html")
        .then(response => response.text())
        .then(data => document.getElementById("navbar-container").innerHTML = data)
        .catch(error => console.error("Error loading navbar:", error));

    fetch("/footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer-container").innerHTML = data)
        .catch(error => console.error("Error loading footer:", error));
});

 // Smooth Page Load Effect
 document.body.style.opacity = 0;
 setTimeout(() => {
     document.body.style.transition = "opacity 0.5s ease-in-out";
     document.body.style.opacity = 1;
 }, 100);

 // Smooth Page Transition When Clicking Links
 document.querySelectorAll("a").forEach(link => {
     link.addEventListener("click", function (event) {
         if (this.href && !this.href.includes("#") && this.target !== "_blank") {
             event.preventDefault();
             let destination = this.href;
             document.body.style.opacity = 0;
             setTimeout(() => {
                 window.location.href = destination;
             }, 400);
         }
     });
 });

 // Smooth Scroll for Internal Links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener("click", function (event) {
         event.preventDefault();
         const target = document.querySelector(this.getAttribute("href"));
         if (target) {
             window.scrollTo({
                 top: target.offsetTop,
                 behavior: "smooth"
             });
         }
     });
 });

 document.getElementById("servicesDropdown").addEventListener("click", function(event) {
    if (!this.parentElement.classList.contains("show")) {
        window.location.href = this.href; // Redirect to services.html when clicked
    }
});

 $(document).ready(function() {
        $('.image-popup').magnificPopup({
            type: 'image',
            gallery: { enabled: true }
        });
    });

