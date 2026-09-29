const taskOneHeading = document.querySelector("#taskOneHeading");
const animalText = document.querySelector("#animalText");

document.querySelector("#changeHeadingButton").addEventListener("click", function () {
    taskOneHeading.textContent = "Updated heading!";
});

document.querySelector("#changeStyleButton").addEventListener("click", function () {
    taskOneHeading.classList.toggle("highlight");
});

document.querySelector("#changeTextButton").addEventListener("click", function () {
    animalText.textContent = "Elephants use their trunks to communicate, eat and drink.";
});

document.querySelector("#appendTextButton").addEventListener("click", function () {
    animalText.textContent += " They can recognize themselves in a mirror.";
});

const animalTable = document.querySelector("#animalTable");
document.querySelector("#animalButton").addEventListener("click", function () {
    animalTable.hidden = !animalTable.hidden;
});

document.querySelector("#changeBackgroundButton").addEventListener("click", function () {
    document.body.classList.toggle("alternate-background");
});

const animalContent = document.querySelector("#animalContent");
const animalHeading = document.createElement("h3");
animalHeading.textContent = "Animal of the Day";
animalHeading.classList.add("animal-heading");

const animalOfTheDayText = document.createElement("p");
animalOfTheDayText.textContent = "Elephants live in close-knit family groups and communicate over long distances.";

const animalOfTheDayImage = document.createElement("img");
animalOfTheDayImage.src = "images/elephant.jpg";
animalOfTheDayImage.alt = "An African bush elephant";
animalContent.append(animalHeading, animalOfTheDayText, animalOfTheDayImage);

document.querySelector("#hideAnimalButton").addEventListener("click", function () {
    animalContent.hidden = true;
});

document.querySelector("#showAnimalButton").addEventListener("click", function () {
    animalContent.hidden = false;
});

const animalDetails = {
    elephant: {
        name: "Elephant",
        image: "images/elephant.jpg",
        description: "Elephants are the world's largest land animals."
    },
    tiger: {
        name: "Tiger",
        image: "images/tiger.jpg",
        description: "Tigers are powerful cats known for their striped coats."
    },
    penguin: {
        name: "Penguin",
        image: "images/penguin.jpg",
        description: "Penguins are flightless birds that are excellent swimmers."
    },
    panda: {
        name: "Panda",
        image: "images/panda.jpg",
        description: "Giant pandas spend much of their day eating bamboo."
    }
};

const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

function updateSelectedAnimal() {
    const animal = animalDetails[animalSelect.value];
    animalName.textContent = animal.name;
    animalImage.src = animal.image;
    animalImage.alt = animal.name;
    animalDescription.textContent = animal.description;
    animalImage.classList.remove("image-highlight", "image-faded", "image-moved", "image-animated");
    document.querySelector("#animateImageButton").textContent = "Animate image";
}

animalSelect.addEventListener("change", updateSelectedAnimal);
updateSelectedAnimal();

animalImage.addEventListener("mouseenter", function () {
    animalImage.classList.add("image-highlight");
});

animalImage.addEventListener("mouseleave", function () {
    animalImage.classList.remove("image-highlight");
});

document.querySelector("#moveImageButton").addEventListener("click", function () {
    animalImage.classList.toggle("image-moved");
});

document.querySelector("#animateImageButton").addEventListener("click", function (event) {
    const isAnimated = animalImage.classList.toggle("image-animated");
    event.currentTarget.textContent = isAnimated ? "Stop animation" : "Animate image";
});

document.querySelector("#fadeImageButton").addEventListener("click", function () {
    animalImage.classList.toggle("image-faded");
});

document.querySelector("#removeImageButton").addEventListener("click", function () {
    animalImage.remove();
});

const observationForm = document.querySelector("#animalForm");
const observationTableBody = document.querySelector("#observationTableBody");
const observationMessage = document.querySelector("#observationMessage");

observationTableBody.addEventListener("click", function (event) {
    if (event.target.matches(".removeObservationButton")) {
        event.target.closest("tr").remove();
    }
});

observationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const animal = document.querySelector("#observationAnimal").value.trim();
    const location = document.querySelector("#observationLocation").value.trim();
    const date = document.querySelector("#observationDate").value;

    if (!animal || !location || !date) {
        observationMessage.textContent = "Please fill in all fields.";
        return;
    }

    const row = document.createElement("tr");
    [animal, location, date].forEach(function (value) {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.append(cell);
    });

    const actionCell = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.classList.add("removeObservationButton");
    removeButton.textContent = "Remove";
    actionCell.append(removeButton);
    row.append(actionCell);
    observationTableBody.append(row);

    observationForm.reset();
    observationMessage.textContent = "Observation added.";
});

document.querySelectorAll("li").forEach(function (item) {
    console.log(item.textContent.trim());
});