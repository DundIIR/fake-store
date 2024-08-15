import axios from 'axios'

const _apiBase = 'https://fakestoreap.com'
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
	limit = _baseLimit,
	offset = _baseOffset,
	searchQuery = '',
	sortValue,
	rangePrice,
	selectedCategories,
) => {
	try {
		const response = await axios.get(`${_apiBase}/products`)
		const filteredData = response.data
			.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
			.filter(product => product.price <= rangePrice)
			.filter(product => selectedCategories.length === 0 || selectedCategories.includes(product.category.toLowerCase()))
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
