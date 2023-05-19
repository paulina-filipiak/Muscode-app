import { openModal } from "../../functions/modal/modal"

export const ProductCard = (product) => {
	return /* HTML */ `
		<section
		onclick="${openModal(`modal-${product.id}`)}"
			class="card"
			data-target="#modal-${product.id}"
			<h2 class="card__name">${product.name}</h2>
			<img
				class="card__img"
				src="/src/assets/${product.imgPath}"
				alt=${product.name}
				width="50"
				height="60" />
			${
				product.promo
					? `<p>${product.promoPrice}</p> <p>${product.price}</p>`
					: `<p>${product.price}</p>`
			}
		</section>
	`
}
