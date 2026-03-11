const imageElement = document.getElementById("mainImage");
const descriptionElement = document.getElementById("mainDescription");
const items = window.CJ_DATA?.galleryItems || [];

const params = new URLSearchParams(window.location.search);
const imageId = params.get("id");
const selectedItem = items.find((item) => item.id === imageId) || items[0];

if (selectedItem && imageElement && descriptionElement) {
  imageElement.src = selectedItem.image;
  imageElement.alt = selectedItem.title;
  descriptionElement.textContent = selectedItem.description;
}