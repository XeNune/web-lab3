function showInfo(brand, price) {
    var infoDiv = document.getElementById('car-info');
    infoDiv.innerHTML = 'Brand: ' + brand + '<br>Price: ' + price;
}

function hideInfo() {
    var infoDiv = document.getElementById('car-info');
    infoDiv.innerHTML = '';
}

var currentSlide = 0;
var carImages = ['src/1651179531_28-sportishka-com-p-mashini-obichnie-mashini-krasivo-foto-35.jpg', 'src/bugatti-veyron-centenaire-2009-250081.jpg', 'src/Mddto9WkuuM.jpg'];

function nextSlide() {
    var carGallery = document.querySelector('.car-gallery');
    currentSlide = (currentSlide + 1) % carImages.length;
    carGallery.style.backgroundImage = 'url(' + carImages[currentSlide] + ')';
}
