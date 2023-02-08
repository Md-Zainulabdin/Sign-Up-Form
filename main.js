// Calling Elements from HTML

const password = document.getElementById('password');
const strength = document.getElementById('strength');
const colorRange = document.querySelector('.colorRange');

// Add Event ('input') for password

password.addEventListener(
    'input', () => {
        psdChecking();
    }
)

// Function To check password strength..

const psdChecking = (value) => {

    let text = password.value;
    console.log(text);

    if (text.length === 0) {
        strength.innerHTML = `Weak Password`;    // to show password strength 'Weak'
        colorRange.classList.remove('weak');
        colorRange.classList.remove('medium');   //  Remove all class      
        colorRange.classList.remove('strong');
    }
    else if (text.length <= 6) {
        colorRange.classList.add('weak');
        colorRange.classList.remove('medium');
    }
    else if (text.length <= 12) {
        colorRange.classList.add('medium');
        strength.innerHTML = `Medium Password`;   // to show password strength 'Medium'
        colorRange.classList.remove('strong');
    }
    else if (text.length > 12) {
        colorRange.classList.add('strong');
        strength.innerHTML = `Strong Password`;   // to show password strength 'Strong'
    }
    else {
        colorRange.classList.remove('weak');
        colorRange.classList.remove('medium');
        colorRange.classList.remove('strong');
    }

};