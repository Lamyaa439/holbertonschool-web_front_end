// Select the toggle element and the header element
const toggleButton = document.querySelector('#toggle_header');
const headerElement = document.querySelector('header');

// Add a click event listener to the toggle element
toggleButton.addEventListener('click', () => {
    if (headerElement.classList.contains('red')) {
        headerElement.classList.remove('red');
        headerElement.classList.add('green');
    } else {
        headerElement.classList.remove('green');
        headerElement.classList.add('red');
    }
});