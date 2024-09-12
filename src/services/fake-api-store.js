import axios from 'axios'

const _apiBase = 'https://fakestoreapi.com'
const _baseLimit = 9
const _baseOffset = 0

const sortingData = (arr, sortValue) => {
	const sortedData = arr.sort((a, b) => {
		switch (sortValue) {
			case 'popular':
				return b.rating.rate - a.rating.rate
			case 'expensive':
				return b.price - a.price
			case 'cheap':
				return a.price - b.price
			default:
				return 0
		}
	})

	return sortedData
}

export const getProducts = async (
	userID,
	limit = _baseLimit,
	offset = _baseOffset,
	searchQuery = '',
	sortValue,
	rangePrice,
	selectedCategories,
) => {
	try {
		const response = await axios.get(`${_apiBase}/products`)
		const responseBasket = await axios.get(`${_apiBase}/carts/${userID}`)
		const basketProductIds = responseBasket.data.products.map(product => product.productId)

		const filteredData = response.data
			.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
			.filter(product => product.price <= rangePrice)
			.filter(product => selectedCategories.length === 0 || selectedCategories.includes(product.category.toLowerCase()))
			.map(product => ({
				...product,
				basket: basketProductIds.includes(product.id),
			}))
		return sortingData(filteredData, sortValue).slice(offset, limit)
	} catch (error) {
		console.log(error)
		throw error
	}
}

export const getAllCategories = async () => {
	try {
		const response = await axios.get(`${_apiBase}/products/categories`)
		return response.data
	} catch (error) {
		console.log(error)
		throw error
	}
}

export const getProductsBasket = async userID => {
	try {
		const response = await axios.get(`${_apiBase}/carts/${userID}`)
		const productsBasket = response.data.products
		console.log('Корзина: ', productsBasket)
		const endProductsBasket = await Promise.all(
			productsBasket.map(async product => {
				const productResponse = await axios.get(`${_apiBase}/products/${product.productId}`)

				return {
					...productResponse.data,
					quantity: product.quantity,
				}
			}),
		)
		console.log(endProductsBasket)
		return endProductsBasket
	} catch (error) {
		console.log(error)
		throw error
	}
}

export const getBasket = async userID => {
	try {
		const response = await axios.get(`${_apiBase}/carts/${userID}`)

		return response.data.products
	} catch (error) {
		console.log(error)
		throw error
	}
}

export const getCountProductsBasket = async userID => {
	try {
		const response = await axios.get(`${_apiBase}/carts/${userID}`)
		const count = response.data.products.reduce((count, product) => {
			return count + product.quantity
		}, 0)
		console.log(count)
		return count
	} catch (error) {
		console.log(error)
		throw error
	}
}

export const updateBasket = async (userId, products) => {
	try {
		const response = await axios.put(`${_apiBase}/carts/${userId}`, {
			userId: userId,
			date: new Date().toISOString().slice(0, 10),
			products: products,
		})

		console.log(response.data)
		return response
	} catch (error) {
		console.error('Ошибка при обновлении корзины:', error)
		throw error
	}
}
