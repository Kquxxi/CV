
        function openPopup(imageSrc, title, description) {
            document.getElementById('popup-image').src = imageSrc;

            document.getElementById('popup').style.display = 'flex';
        }
        function closePopup() {
            document.getElementById('popup').style.display = 'none';
        }