export const ProductCard = (product) => {
	const discount = ((product.price - product.promoPrice) / product.price) * 100
	return /* HTML */ `
		<section class="card container" id="${product?.id}">
			<div
				style="display:${product.promoPrice ? "block" : "none"}"
				class="ribbon">
				<p class="ribbon-price">-${discount.toFixed(0)}%</p>
			</div>
			<h3 class="card__name">${product?.name}</h3>
			<img
				class="card__img"
				src="/src/assets/${product?.imgPath}"
				alt=${product?.name} />
			${product?.promo
				? `<p class="text__bold">${product?.promoPrice} ${product?.currency}</p> <p class="text__line-through">${product?.price} ${product?.currency}</p>`
				: `<p class="text__bold">${product?.price} ${product?.currency}</p>`}
		</section>
	`
}
