const searchBarContainer = document.querySelector(".search-bar-container");
const magnifierEl = document.querySelector(".magnifier");

// console.log(searchBarContainer);

magnifierEl.addEventListener("click", () => {
  searchBarContainer.classList.toggle("active");
});
