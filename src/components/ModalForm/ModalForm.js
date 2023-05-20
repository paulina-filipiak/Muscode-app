import { useProducts } from "../../database/products"

export const ModalForm = (id) => {
	const products = useProducts

	return /* HTML */ `
		<form id="form-${id}" name="modalForm">
			<label>Nazwa produktu</label>
			<input type="text" name="name" value="${products[id].name}" />
			<label>Cena</label>
			<input type="number" name="price" value="${products[id].price}" />
			<label>Promocyjna cena</label>
			<input type="text" name="promoPrice" value="${products[id].promoPrice}" />
			<label>Waluta</label>
			<select name="currency" value="${products[id].currency}">
				<option ${products[id].currency === "$" ? "selected" : ""}>$</option>
				<option ${products[id].currency === "PLN" ? "selected" : ""}>
					PLN
				</option>
				<option ${products[id].currency === "EUR" ? "selected" : ""}>
					EUR
				</option>
			</select>
			<button type="submit">Zapisz</button>
			<button type="button" class="cancel" id="button-cancel-${id}">
				Anuluj
			</button>
		</form>
	`
}
