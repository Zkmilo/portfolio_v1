//navbar estilo notch de iPhone
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        navbar.classList.toggle('scrolled', window.scrollY > 200);
    });
});

// Brillo del cursos
document.addEventListener('mousemove', (e) => {
    const light = document.querySelector('.cursor-light');
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY}px`;
});

document.querySelectorAll('.skill-card').forEach(card => {
    observer.observe(card);
});


function copyToClipboard(text) {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    alert('Copiado: ' + text);
}