export const ProductsTableRow = (product) => {
	return /* HTML */ `
		<tr>
			<td>${product.id}</td>
			<td>${product.name}</td>
			<td>${product.promo ? product.promoPrice : ""}</td>
			<td>${product.price}</td>
			<td>${product.currency}</td>
		</tr>
	`
}
