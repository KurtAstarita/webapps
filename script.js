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

function sendHeightToParent() {
    const contentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight
    );
    window.parent.postMessage({ height: contentHeight }, 'https://kurtastarita.github.io/Ultimate-Workout-Log/'); // Replace '*' with your parent's origin for security
}

// Call sendHeightToParent whenever the content height changes
window.onload = sendHeightToParent;
window.addEventListener('resize', sendHeightToParent);
// Example: After workout generation
// document.getElementById('generateButton').addEventListener('click', function() {
//     setTimeout(sendHeightToParent, 500);
// });
