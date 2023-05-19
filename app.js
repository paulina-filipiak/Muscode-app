import { ProductCardList } from "./src/components/ProductCardsList/ProductCardList"
import { ProductsTable } from "./src/components/ProductsTable/ProductsTable"
import { useProducts } from "./src/database/products"
import { closeModal, openModal } from "./src/functions/modal/modal"

const App = () => {
	const products = useProducts
	ProductCardList(products)
	ProductsTable(products)
	// const productCards = document.querySelectorAll(".card")
	// productCards.forEach((card) =>
	// 	card.addEventListener("click", openModal(`modal-${card.id}`))
	// )
	document.addEventListener("click", closeModal)
}

export default App()
