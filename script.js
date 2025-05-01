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

<!-- .............................................................. -->



window.addEventListener('message', function(event) {
    // Check the origin of the message for security if you're not using '*'
    // if (event.origin !== 'https://kurtastarita.github.io') return;

    if (event.data && event.data.height) {
        const iframe = document.getElementById('myWorkoutLogIframe');
        if (iframe) {
            iframe.style.height = event.data.height + 'px';
        }
    }
});

window.onload = function() {
    const iframe = document.getElementById('myWorkoutLogIframe');
    if (iframe) {
        iframe.src = 'https://ultimate-workout-log.kurtastarita.com'; // Set the iframe source after the listener is set up
    }
};
