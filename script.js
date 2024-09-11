const openPopupBtn = document.getElementById('openPopup');
const imagePopup = document.getElementById('imagePopup');
const closePopupBtn = document.getElementById('closePopup');

// When the user clicks on the button, show the popup
openPopupBtn.addEventListener('click', function() {
    imagePopup.style.display = 'block';
});

// When the user clicks on the close button, hide the popup
closePopupBtn.addEventListener('click', function() {
    imagePopup.style.display = 'none';
});

// Optional: Close the popup when the user clicks outside the image
window.addEventListener('click', function(event) {
    if (event.target === imagePopup) {
        imagePopup.style.display = 'none';
    }
});