import { Modal } from "../Modal/Modal"

export const ModalList = (cards) => {
	const modalsContainer = document.getElementById("modal-overlay")
	return (modalsContainer.innerHTML = `${cards
		.map((card) => Modal(card))
		.join("")}`)
}
