import axios from 'axios'

const _apiBase = 'https://fakestoreapi.com'
const _baseLimit = 9
const _baseOffset = 0

export const getProducts = async (limit = _baseLimit, offset = _baseOffset) => {
	try {
		const response = await axios.get(`${_apiBase}/products?limit=${limit}`)
		return response.data.slice(offset)
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
