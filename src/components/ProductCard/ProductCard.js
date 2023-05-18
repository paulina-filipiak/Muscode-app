export const ProductCard = (product) => {
	return `
    <section class="card "> 
    <h2 class="card__name">${product.name}</h2>
    <img class="card__img" src="../../assets/${product.imgPath}" alt=${
		product.name
	} width="500" height="600" >
    ${
			product.promo ? "<p>${product.promoPrice}</p>" : "<p>${product.price}</p>"
		}
    <p>${product.promoPrice}</p>
    <p>${product.name}</p>

    </section>
    `
}
