<!-- ...................... Function Dropdown Menu Delay ............................... -->

const dropdown = document.querySelector('.dropdown');
  const dropdownContent = document.querySelector('.dropdown-content');
  let timeoutId;

  dropdown.addEventListener('mouseenter', function() {
    clearTimeout(timeoutId); // Clear any existing timeout to hide
    dropdownContent.style.display = 'block';
  });

  dropdown.addEventListener('mouseleave', function() {
    timeoutId = setTimeout(function() {
      dropdownContent.style.display = 'none';
    }, 200); // Adjust the delay (in milliseconds) as needed
  });

  dropdownContent.addEventListener('mouseenter', function() {
    clearTimeout(timeoutId); // Clear the timeout if the mouse enters the dropdown content
  });

  dropdownContent.addEventListener('mouseleave', function() {
    timeoutId = setTimeout(function() {
      dropdownContent.style.display = 'none';
    }, 200); // Adjust the delay here as well if needed
  });


<!-- ............................ Back To Top Button ..................................... -->

// JavaScript (back-to-top.js)
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById("back-to-top-btn");

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 1000) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    // Scroll to the top when the button is clicked
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: Add smooth scrolling effect
        });
    });
});
