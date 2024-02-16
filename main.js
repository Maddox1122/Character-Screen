const characters = [
  { id: 1, name: "Raven", img: "./images/redcloak.png" },
  { id: 2, name: "Greg", img: "./images/greg.png" },
  { id: 3, name: "Aang", img: "./images/aang.png" },
  { id: 4, name: "Bobr", img: "./images/bobr.png" },
  { id: 5, name: "Jessica", img: "./images/jessica.png" },
  { id: 6, name: "Kevin", img: "./images/kevin.png" },
  { id: 7, name: "Musti", img: "./images/musti.png" },
  { id: 8, name: "Josh", img: "./images/josh.png" },
  { id: 9, name: "Maddox", img: "./images/maddox.png" },
  { id: 10, name: "Chinese", img: "./images/chinese.png" },
];

const characterContainer = document.querySelector(".characters");
const selectedCharacter = document.querySelector(".selectedCharacter");
const selectedCharacterName = document.querySelector(".selectedCharacterName");

function updateSelectedCharacter(character) {
  selectedCharacterName.textContent = character.name;
  selectedCharacter.src = character.img;
}

characterContainer.addEventListener("click", function (event) {
  if (event.target.tagName === "IMG") {
    const characterId = parseInt(event.target.dataset.characterId);
    const selectedCharacter = characters.find(
      (character) => character.id === characterId
    );

    updateSelectedCharacter(selectedCharacter);
  }
});

function initializeCharacterImages() {
  characters.forEach((character) => {
    const imgElement = document.createElement("img");
    imgElement.src = character.img;
    imgElement.alt = "";
    imgElement.dataset.characterId = character.id;
    characterContainer.appendChild(imgElement);
  });
}

initializeCharacterImages();
