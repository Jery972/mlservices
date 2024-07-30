// script.js
document.addEventListener("DOMContentLoaded", async () => {
  const carouselImagesContainer = document.querySelector(".carousel__images");
  const prevButton = document.querySelector(".carousel__button--prev");
  const nextButton = document.querySelector(".carousel__button--next");

  let currentIndex = 0;
  let images = [];

  // Fonction pour récupérer les images depuis un dossier
  function loadGalleryImages() {
    const imagePath = `/assets/images/carousel/`;
    // const imagePath = `/images/galleryPictures/vitre/`;

    fetch(imagePath)
      .then((response) => response.text())
      .then((html) => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;

        const imageLinks = Array.from(tempDiv.querySelectorAll("a"));

        imageLinks.splice(0, 5);
        console.log(imageLinks);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération du contenu HTML :", error)
      );
  }
  // Mettre à jour le carrousel avec les images récupérées
  function updateCarousel() {
    carouselImagesContainer.innerHTML = "";
    images.forEach((imageSrc) => {
      const img = document.createElement("img");
      img.src = imageSrc;
      carouselImagesContainer.appendChild(img);
    });
    showImage(currentIndex);
  }

  // Afficher l'image à l'index spécifié
  function showImage(index) {
    const imageWidth = carouselImagesContainer.querySelector("img").clientWidth;
    carouselImagesContainer.style.transform = `translateX(-${
      index * imageWidth
    }px)`;
  }

  // Navigation avec les flèches
  prevButton.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
  });

  nextButton.addEventListener("click", () => {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    showImage(currentIndex);
  });

  // Initialiser le carrousel
  await fetchImages();
});

loadGalleryImages();
