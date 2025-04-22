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

<!-- ............................ Pop-up Diclaimer Logic ................................ -->

document.addEventListener('DOMContentLoaded', function() {
    const warningPopup = document.getElementById('security-warning-popup');
    const overlay = document.getElementById('popup-overlay');
    const dontShowAgainCheckbox = document.getElementById('dont-show-again');
    const continueButton = document.getElementById('continue-button');

    const hasSeenWarning = localStorage.getItem('securityWarningShown');

    if (!hasSeenWarning) {
      warningPopup.style.display = 'block';
      overlay.style.display = 'block';
    }

    continueButton.addEventListener('click', function() {
      warningPopup.style.display = 'none';
      overlay.style.display = 'none';
      if (dontShowAgainCheckbox.checked) {
        localStorage.setItem('securityWarningShown', 'true');
      }
    });
  });
