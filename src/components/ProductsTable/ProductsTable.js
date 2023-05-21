import { ProductsTableRow } from "../ProductsTableRow/ProductsTableRow"

export const ProductsTable = (products) => {
	const tableContainer = document.querySelector(".products-table-container")
	return (tableContainer.innerHTML = /* HTML */ `
		<table>
			<h3>Lista produktów</h3>
			<thead>
				<tr>
					<th>#</th>
					<th>nazwa</th>
					<th>promocyjna cena</th>
					<th>cena</th>
					<th>waluta</th>
				</tr>
			</thead>
			<tbody>
				${products.map((product) => ProductsTableRow(product))}
			</tbody>
		</table>
	`)
}
