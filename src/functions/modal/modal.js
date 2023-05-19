export const openModal = (id) => {
	document.getElementById("modal-overlay").style.display = "flex"
	document.getElementById(id).style.display = "flex"
}

export const closeModal = () => {
	document.getElementById("modal-overlay").style.display = "none"
	document.querySelector(".modal").style.display = "none"
}
