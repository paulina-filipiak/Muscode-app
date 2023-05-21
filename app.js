import { ModalList } from "./src/components/ModalList/ModalList"
import { ProductCardList } from "./src/components/ProductCardsList/ProductCardList"
import { ProductsTable } from "./src/components/ProductsTable/ProductsTable"
import { TodoList } from "./src/components/Todolist/TodoList"
import { useProducts } from "./src/database/products"
import { closeModal, openModal } from "./src/functions/modal/modal"
import { v4 as uuidv4 } from "uuid"

const App = () => {
	//----------------TODO LIST-----------------------//
	const todos = []
	const checkedCounter = document.querySelector("#checked-counter")

	function addTodo(text) {
		const todo = {
			text,
			checked: false,
			id: uuidv4(),
		}
		todos.push(todo)
	}

	const todoForm = document.querySelector("#todo-form")

	todoForm.addEventListener("submit", (event) => {
		event.preventDefault()
		const input = document.querySelector("#todo-input")
		const text = input.value.trim()
		if (text !== "") {
			addTodo(text)
			input.value = ""
		}
		TodoList(todos)
		const checkboxes = document.querySelectorAll("input[type=checkbox]")
		checkboxes.forEach(function (checkbox) {
			checkbox.addEventListener("change", function (event) {
				event.preventDefault()
				const checked = Array.from(document.querySelectorAll("input:checked"))
				checkedCounter.innerHTML = checked.length
			})
		})
	})

	//----------------PRODUCTS-----------------------//

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
