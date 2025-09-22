document.querySelectorAll('.counter').forEach(counter => {// Select all elements with class 'counter'
    const minus = counter.querySelector('.minus');// Select the child element with class 'minus'
    const plus = counter.querySelector('.plus');// Select the child element with class 'plus'
    const value = counter.querySelector('.counter-value');// Select the child element with class 'counter-value'
    minus.addEventListener('click', () => {// Add click event listener to the minus button
        let val = parseInt(value.textContent, 10);// Parse the current value as an integer
        if (val > 1) value.textContent = val - 1;// Decrement the value if it's greater than 1
    });
    plus.addEventListener('click', () => {//Add click event listener to the plus button
        let val = parseInt(value.textContent, 10);// Parse the current value as an integer
        if (val < 10) {
        value.textContent = val + 1;// Increment the value
        }
    });
});