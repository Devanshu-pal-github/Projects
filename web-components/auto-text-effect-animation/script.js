const containerEl = document.querySelector(".container");
const cariers = ["Youtuber", "Engineer", "Doctor", "Tech Guru"];

let carierIndex = 0;

let characterIndex = 0;

const updateText = () => {
  characterIndex++;
  containerEl.innerHTML = `
    <h1>I am ${cariers[carierIndex].slice(0, 1) === "E" ? "an" : "a"} ${cariers[
    carierIndex
  ].slice(0, characterIndex)}</h1>
    `;
  if (characterIndex === cariers[carierIndex].length) {
    carierIndex++;
    characterIndex = 0;
  }
  if (carierIndex === cariers.length) {
    carierIndex = 0;
  }
  setTimeout(updateText, 500);
};

updateText();
