// async function fetchImages() {
//   const folderUrl = "assets/images/carousel/"; // Le chemin vers le dossier contenant les images
//   try {
//     const response = await fetch(folderUrl);
//     if (!response.ok) {
//       throw new Error("Erreur lors de la récupération du contenu du dossier");
//     }
//     const text = await response.text();
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(text, "text/html");

//     const images = [];
//     doc.querySelectorAll("a").forEach((link) => {
//       const href = link.getAttribute("href");
//       if (href.match(/\.(jpe?g|png|gif|bmp|webp)$/i)) {
//         images.push(href); // Assurez-vous que les URLs sont corrects
//       }
//     });

//     addImagesToSwiper(images);
//   } catch (error) {
//     console.error("Erreur:", error);
//   }
// }

// function addImagesToSwiper(imageUrls) {
//   const swiperWrapper = document.querySelector(".swiper-wrapper");
//   imageUrls.forEach((url, index) => {
//     const slide = document.createElement("div");
//     slide.classList.add("swiper-slide");

//     const img = document.createElement("img");
//     img.src = url;
//     img.alt = `Image du volet roulant ${index + 1}`;

//     slide.appendChild(img);
//     swiperWrapper.appendChild(slide);
//   });

//   // Initialiser Swiper après avoir ajouté les slides
//   const swiper = new Swiper(".swiper", {
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     autoplay: {
//       delay: 4000,
//     },
//     loop: imageUrls.length > 1, // Activer le mode boucle uniquement s'il y a plus d'une diapositive
//   });

//   // Mettre à jour Swiper après avoir ajouté les slides
//   swiper.update();
// }

// document.addEventListener("DOMContentLoaded", () => {
//   fetchImages();
// });

const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000,
  },
  loop: true, // Activer le mode boucle uniquement s'il y a plus d'une diapositive
});
