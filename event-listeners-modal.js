// Get all "Lihat Penjelasan Lengkap" buttons
const medanMagnetLink = document.querySelector('.concept-card:nth-child(1) .see-more');
const arusListrikLink = document.querySelector('.concept-card:nth-child(2) .see-more');
const jarakLink = document.querySelector('.concept-card:nth-child(3) .see-more');

// Get all modals
const modalMedanMagnet = document.getElementById('modalMedanMagnet');
const modalArusListrik = document.getElementById('modalArusListrik');
const modalJarak = document.getElementById('modalJarak');

// Add event listeners to "Lihat Penjelasan Lengkap" buttons
medanMagnetLink.addEventListener('click', function(e) {
    e.preventDefault();
    modalMedanMagnet.style.display = 'block';
});

arusListrikLink.addEventListener('click', function(e) {
    e.preventDefault();
    modalArusListrik.style.display = 'block';
});

jarakLink.addEventListener('click', function(e) {
    e.preventDefault();
    modalJarak.style.display = 'block';
});

// Get all close elements
const closeElements = document.querySelectorAll('.close, .close-btn');

// Add close event to all close buttons
closeElements.forEach(element => {
    element.addEventListener('click', function() {
        modalMedanMagnet.style.display = 'none';
        modalArusListrik.style.display = 'none';
        modalJarak.style.display = 'none';
    });
});

// Click outside to close
window.addEventListener('click', function(event) {
    if (event.target === modalMedanMagnet) {
        modalMedanMagnet.style.display = 'none';
    }
    if (event.target === modalArusListrik) {
        modalArusListrik.style.display = 'none';
    }
    if (event.target === modalJarak) {
        modalJarak.style.display = 'none';
    }
});