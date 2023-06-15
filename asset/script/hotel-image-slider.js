let currentImageIndex = 0;

const imageContainerId = "hotel-image-container";
const imageContainer = document.getElementById(imageContainerId);

const imageNextButtonId = "hotel-image-next";
const imageNextButton = document.getElementById(imageNextButtonId);

const imagePrevButtonId = "hotel-image-prev";
const imagePrevButton = document.getElementById(imagePrevButtonId);

const minimumImageIndex = 0;
const maximumImageIndex = imageContainer.childElementCount - 1 ?? null;

const handleNextImage = () => {
  if (!maximumImageIndex) {
    return;
  }

  const nextImageIndex = currentImageIndex + 1;

  if (nextImageIndex > maximumImageIndex) {
    currentImageIndex = minimumImageIndex;
    return;
  }

  ++currentImageIndex;
};

const handlePrevImage = () => {
  if (!maximumImageIndex) {
    return;
  }

  const nextImageIndex = currentImageIndex - 1;

  if (nextImageIndex < minimumImageIndex) {
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
