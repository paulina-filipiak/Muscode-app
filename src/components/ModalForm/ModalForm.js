import { useProducts } from "../../database/products"
export const ModalForm = (id) => {
	const products = useProducts
	return /* HTML */ `
		<form id="form-${id}">
			<label>Nazwa produktu</label>
			<input type="text" value="${products[id].name}" />
			<label>Cena</label>
			<input type="number" value="${products[id].price}" />
			<label>Promocyjna cena</label>
			<input type="text" value="${products[id].promoPrice}" />
			<label>Waluta</label>
			<select value="${products[id].currency}">
				<option ${products[id].currency === "$" ? "selected" : ""}>$</option>
				<option ${products[id].currency === "PLN" ? "selected" : ""}>
					PLN
				</option>
				<option ${products[id].currency === "EUR" ? "selected" : ""}>
					EUR
				</option>
			</select>
			<button type="submit">Zapisz</button>
			<button>Anuluj</button>
		</form>
	`
}
