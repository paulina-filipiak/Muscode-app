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

	productCards.forEach((card) =>
		card.addEventListener("click", () => {
			openModal(`modal-${card?.id}`)
		})
	)

	const forms = Array.from(document.querySelectorAll(`form`))

	forms.forEach(function (form, index) {
		form.addEventListener("submit", function (event) {
			event.preventDefault()
			const updatedName = document.querySelector(
				`#form-${index} input[name="name"]`
			).value
			const updatedPrice = document.querySelector(
				`#form-${index} input[name="price"]`
			).value
			const updatedPromoPrice = document.querySelector(
				`#form-${index} input[name="promoPrice"]`
			).value
			const updatedCurrency = document.querySelector(
				`#form-${index} select[name="currency"]`
			).value
			products[index] = {
				...products[index],
				name: updatedName,
				price: updatedPrice,
				promoPrice: updatedPromoPrice,
				currency: updatedCurrency,
				promo: updatedPromoPrice ? true : false,
			}
			closeModal()
			console.log("Updated products:", products[index])

			//render elements with updated data
			ProductCardList(products)
			ProductsTable(products)
			const productCards = Array.from(document.querySelectorAll(".card"))

			productCards.forEach(function (card) {
				card.addEventListener("click", function () {
					console.log(`modal-${card.id}`)
					openModal(`modal-${card?.id}`)
				})
			})
		})
	})

	const buttonsCancel = Array.from(document.querySelectorAll(".cancel"))

	buttonsCancel.forEach((button) =>
		button.addEventListener("click", () => closeModal())
	)
}

export default App()
