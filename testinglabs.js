
    const checkbox = document.getElementById('check');
    const navbar = document.querySelector('.navbar');

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            navbar.classList.add('active');
        } else {
            navbar.classList.remove('active');
        }
    });

