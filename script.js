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

const dontShowCheckbox = document.getElementById('dont-show-again');
if (dontShowCheckbox) {
    const securityWarningPopup = document.getElementById('security-warning-popup');
    const popupOverlay = document.getElementById('popup-overlay');
    const continueButton = document.getElementById('continue-button');
    const hasDismissedWarning = localStorage.getItem('dismissedSecurityWarning');

    if (hasDismissedWarning === 'true') {
        if (securityWarningPopup) securityWarningPopup.style.display = 'none';
        if (popupOverlay) popupOverlay.style.display = 'none';
    } else {
        if (securityWarningPopup) securityWarningPopup.style.display = 'block';
        if (popupOverlay) popupOverlay.style.display = 'block';
    }

    continueButton.addEventListener('click', () => {
        if (securityWarningPopup) securityWarningPopup.style.display = 'none';
        if (popupOverlay) popupOverlay.style.display = 'none';
        if (dontShowCheckbox.checked) {
            localStorage.setItem('dismissedSecurityWarning', 'true');
        }
    });
}
