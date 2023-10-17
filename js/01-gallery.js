import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const imagesEl = galleryItems.map(
  (item) => `<div class = "gallery_item"> <a class="gallery_link" </div>`
);
