import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

const imagesEl = galleryItems
  .map(
    (item) =>
      `<li>
      <a class="gallery_item" href="${item.original}"> <img class="gallery_image" src="${item.preview}" alt="${item.description}" /> </a></li>`
  )
  .join("");

galleryEl.insertAdjacentHTML("afterbegin", imagesEl);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
