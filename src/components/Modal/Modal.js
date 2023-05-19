import { ModalForm } from "../ModalForm/ModalForm"
export const Modal = (card) => {
	return /* HTML */ `
		<div class="modal" id="modal-${card?.id}">${ModalForm(card?.id)}</div>
	`
}
