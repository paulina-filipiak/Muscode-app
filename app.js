import { ProductCardList } from "./src/components/ProductCardsList/ProductCardList"
import { useProducts } from "./src/database/products"

const App = () => {
	const products = useProducts
	return ProductCardList(products)
}

export default App()
