async function fetchImages() {
  const folderUrl = "assets/images/carousel/"; // Le chemin vers le dossier contenant les images
  try {
    const response = await fetch(folderUrl);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération du contenu du dossier");
    }
    const text = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");

    const images = [];
    doc.querySelectorAll("a").forEach((link) => {
      const href = link.getAttribute("href");
      if (href.match(/\.(jpe?g|png|gif|bmp|webp)$/i)) {
        images.push(href);
      }
    });

    console.log(images);
  } catch (error) {
    console.error("Erreur:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fetchImages();
});

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 4000,
    },
    loop: true,
  });
});
