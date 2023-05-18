import { ProductCard } from "../ProductCard/ProductCard"

export const ProductCardList = (products) => {
	const cardsContainer = document.querySelector(".cards-container")
	return (cardsContainer.innerHTML = `${products
		.map((product) => ProductCard(product))
		.join("")}`)
}
