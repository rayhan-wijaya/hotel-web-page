let currentImageIndex = 0;

const minimumImageIndex = 0;
const maximumImageIndex = 4;

const imageContainerId = "hotel-image-container";
const imageContainer = document.getElementById(imageContainerId);

const imageNextButtonId = "hotel-image-next";
const imageNextButton = document.getElementById(imageNextButtonId);

const imagePrevButtonId = "hotel-image-prev";
const imagePrevButton = document.getElementById(imagePrevButtonId);

const handleNextImage = () => {
  if ((currentImageIndex + 1) > maximumImageIndex) {
    currentImageIndex = minimumImageIndex;

    return;
  }

  ++currentImageIndex;
};

const handlePrevImage = () => {
  if ((currentImageIndex - 1) < minimumImageIndex) {
    currentImageIndex = maximumImageIndex;

    return;
  }

  --currentImageIndex;
};

const main = () => {
  if (!imageContainer || !imageNextButton || !imagePrevButton) {
    return;
  }

  imageNextButton.onclick = handleNextImage;
  imagePrevButton.onclick = handlePrevImage;
};

main();
