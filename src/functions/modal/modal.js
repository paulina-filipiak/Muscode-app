export const openModal = (id) => {
	document.getElementById(id).classList.add("open")
}

export const closeModal = () => {
	document
		.querySelectorAll(".open")
		.forEach((element) => element.classList.remove("open"))
}
