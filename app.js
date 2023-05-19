import { ModalList } from "./src/components/ModalList/ModalList"
import { ProductCardList } from "./src/components/ProductCardsList/ProductCardList"
import { ProductsTable } from "./src/components/ProductsTable/ProductsTable"
import { useProducts } from "./src/database/products"
import { closeModal, openModal } from "./src/functions/modal/modal"

const App = () => {
	const products = useProducts
	ProductCardList(products)
	ProductsTable(products)
	const productCards = Array.from(document.querySelectorAll(".card"))
	ModalList(productCards)
	// console.log("productCards", productCards)

	productCards.forEach((card) =>
		card.addEventListener("click", () => {
			// console.log(`modal-${card.id}`)
			openModal(`modal-${card.id}`)
		})
	)
	document.getElementById("modal-overlay").addEventListener("click", closeModal)
}

export default App()
