import { ProductCardList } from "./src/components/ProductCardsList/ProductCardList"
import { ProductsTable } from "./src/components/ProductsTable/ProductsTable"
import { useProducts } from "./src/database/products"

const App = () => {
	const products = useProducts
	ProductCardList(products)
	ProductsTable(products)
}

export default App()
