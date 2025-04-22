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
        const dontShowCheckbox = document.getElementById('dont-show-security-tip');
        const securityTipElement = dontShowCheckbox.closest('p').previousElementSibling; // Adjust selector if needed

        const hasDismissedSecurityTip = localStorage.getItem('dismissedSecurityTip');
        if (hasDismissedSecurityTip === 'true') {
            securityTipElement.style.display = 'none';
            dontShowCheckbox.closest('p').style.display = 'none';
        }

        dontShowCheckbox.addEventListener('change', function() {
            if (this.checked) {
                localStorage.setItem('dismissedSecurityTip', 'true');
                securityTipElement.style.display = 'none';
                this.closest('p').style.display = 'none';
            } else {
                localStorage.removeItem('dismissedSecurityTip');
                securityTipElement.style.display = 'block';
                this.closest('p').style.display = 'block';
            }
        });
    });
