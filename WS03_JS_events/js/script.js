function showTable() {
	const animal = "Tiger";
	const habitat = "Forest";
	const diet = "Carnivore";
	const secondAnimal = "Elephant";
	const secondHabitat = "Savanna";
	const secondDiet = "Herbivore";
	const tableContainer = document.querySelector("#tableContainer");

	if (!tableContainer) {
		return;
	}

	tableContainer.innerHTML = `
		<table class="display">
			<thead>
				<tr>
					<th>Animal</th>
					<th>Habitat</th>
					<th>Diet</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>${animal}</td>
					<td>${habitat}</td>
					<td>${diet}</td>
				</tr>
				<tr>
					<td>${secondAnimal}</td>
					<td>${secondHabitat}</td>
					<td>${secondDiet}</td>
				</tr>
			</tbody>
		</table>`;
}

const exercise1Heading = document.querySelector("#exercise1Heading");
const exercise2Heading = document.querySelector("#exercise2Heading");
const exercise2Message = document.querySelector("#exercise2Message");
const feedbackForm = document.querySelector("#feedbackForm");
const feedback = document.querySelector("#feedback");
const status = document.querySelector("#status");
const charcount = document.querySelector("#charcount");
const preview = document.querySelector("#preview");
const keyinfo = document.querySelector("#keyinfo");
const keybox = document.querySelector("#keybox");
const keycount = document.querySelector("#keycount");
const modifierinfo = document.querySelector("#modifierinfo");
const locationButton = document.querySelector("#locationButton");
const locationStatus = document.querySelector("#locationStatus");
let pressedKeys = 0;

if (exercise1Heading) {
	exercise1Heading.addEventListener("click", () => {
		exercise1Heading.style.color = "red";
		exercise1Heading.innerHTML = "Bye bye mouse!";
	});
}

if (exercise2Heading) {
	exercise2Heading.addEventListener("mouseover", () => {
		console.log("Stepped over me with a mouse!");
		if (exercise2Message) {
			exercise2Message.innerHTML = "Stepped over me with a mouse!";
		}
	});
}

if (feedback) {
	feedback.addEventListener("focus", () => {
		status.innerHTML = "You can now write your feedback.";
		feedback.classList.add("focused");
	});

	feedback.addEventListener("blur", () => {
		status.innerHTML = "";
		status.className = "status-message";
		feedback.classList.remove("focused");
	});

	feedback.addEventListener("input", () => {
		charcount.innerHTML = `${feedback.value.length}/200`;
		preview.textContent = feedback.value || "The preview will appear here";
	});
}

if (feedbackForm) {
	feedbackForm.addEventListener("submit", (event) => {
		event.preventDefault();
		const feedbackLength = feedback.value.trim().length;

		if (feedbackLength < 10 || feedbackLength > 200) {
			status.innerHTML = "Feedback must contain 10-200 characters.";
			status.className = "status-message error";
			return;
		}

		status.innerHTML = "Thank you for your feedback!";
		status.className = "status-message success";
		feedback.value = "";
		charcount.innerHTML = "0/200";
		preview.textContent = "The preview will appear here";
	});
}

document.addEventListener("keydown", (event) => {
	console.log(event);
	pressedKeys += 1;
	if (keyinfo) {
		keyinfo.innerHTML = `Key: ${event.key} | Code: ${event.code}`;
	}
	if (keybox) {
		keybox.innerHTML = event.key;
	}
	if (keycount) {
		keycount.innerHTML = `Key presses: ${pressedKeys}`;
	}
	if (modifierinfo) {
		modifierinfo.innerHTML = `Shift: ${event.shiftKey ? "yes" : "no"} | Ctrl: ${event.ctrlKey ? "yes" : "no"} | Alt: ${event.altKey ? "yes" : "no"}`;
	}
	document.body.style.backgroundColor = event.key === "r" ? "#ffe1e1" : "#eef6f3";
});

if (locationButton) {
	locationButton.addEventListener("click", () => {
	if (!navigator.geolocation) {
		locationStatus.innerHTML = "Geolocation is not supported by this browser.";
		return;
	}

	locationStatus.innerHTML = "Finding your location...";
	navigator.geolocation.getCurrentPosition(
		(position) => {
			const lat = position.coords.latitude;
			const lon = position.coords.longitude;
			const url = `https://www.google.com/maps?q=${lat},${lon}`;
			locationStatus.innerHTML = `<a href="${url}" target="_blank" rel="noopener">Open your location in Google Maps</a>`;
		},
		(error) => {
			locationStatus.innerHTML = `Could not get the location: ${error.message}`;
		}
	);
	});
}
