document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', event => {
        document.querySelectorAll('.content h1').forEach(section => {
            section.style.display = 'none';
        });
        const sectionId = item.getAttribute('href').substring(1);
        document.getElementById(sectionId).style.display = 'block';
    });
});

// Show the home section by default
document.getElementById('home').style.display = 'block';
