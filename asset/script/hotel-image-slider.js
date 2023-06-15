let currentImageIndex = 0;

const imageContainerId = "hotel-image-container";
const imageContainer = document.getElementById(imageContainerId);

const imageNextButtonId = "hotel-image-next";
const imageNextButton = document.getElementById(imageNextButtonId);

const imagePrevButtonId = "hotel-image-prev";
const imagePrevButton = document.getElementById(imagePrevButtonId);

const minimumImageIndex = 0;
const maximumImageIndex = imageContainer.childElementCount - 1 ?? null;

/**
  * @param {number} newImageIndex
  */
const updateImage = (newImageIndex) => {
  const newImage = imageContainer.children[newImageIndex];
  newImage.classList.remove("hidden");

  const currentImage = imageContainer.children[currentImageIndex];
  currentImage.classList.add("hidden");

  currentImageIndex = newImageIndex;
};

const handleNextImage = () => {
  const nextImageIndex = currentImageIndex + 1;

  if (nextImageIndex > maximumImageIndex) {
    updateImage(minimumImageIndex);
    return;
  }

  updateImage(nextImageIndex);
};

const handlePrevImage = () => {
  const nextImageIndex = currentImageIndex - 1;

  if (nextImageIndex < minimumImageIndex) {
    updateImage(maximumImageIndex);
    return;
  }

  updateImage(nextImageIndex);
};

const main = () => {
  if (
    !imageContainer
    || !imageNextButton
    || !imagePrevButton
    || !maximumImageIndex
  ) {
    return;
  }

  imageNextButton.onclick = handleNextImage;
  imagePrevButton.onclick = handlePrevImage;
};

main();
