function toggleMenu() {
	var x = document.getElementById("navbar");
	if (x.className === "navbar") {
		x.className += " responsive";
	} else {
		x.className = "navbar";
	}
}

document.addEventListener("DOMContentLoaded", function () {
	var titleWidth = document.getElementById("main-title").offsetWidth; // Get the width of the title
	var descriptionContent = document.getElementById("description-content");
	descriptionContent.style.width = `${titleWidth}px`; // Set the width of the description content to match the title
});
