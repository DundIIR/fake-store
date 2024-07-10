import './_cardList.scss'
import Card from '../Card/Card'
import { useState, useEffect } from 'react'

import { getProducts } from '../../services/fake-api-store'
import CardListSkeleton from '../Skeleton/CardListSkeleton'
import { useToast } from '@chakra-ui/react'

const CardList = ({ layout }) => {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState()
	const [offset, setOffset] = useState(0)
	const [endProduct, setEndProduct] = useState(false)
	const toast = useToast()

	const PRODUCTS_PER_PAGE = 9

	const loadProducts = async () => {
		try {
			const newProducts = await getProducts(offset + PRODUCTS_PER_PAGE, offset)
			if (newProducts.length < PRODUCTS_PER_PAGE) {
				setEndProduct(true)
			}
			setProducts(prevProducts => [...prevProducts, ...newProducts])
			setLoading(false)
			setError(null)
			setOffset(offset => offset + PRODUCTS_PER_PAGE)
		} catch (err) {
			setError(err)
			setLoading(true)
		}
	}

	useEffect(() => {
		loadProducts()
	}, [])

	useEffect(() => {
		error
			? toast({
					title: 'Упс... Проблема',
					description: 'Попробуйте зайти попозже, проблема уже решается',
					status: 'error',
					duration: 9000,
					isClosable: true,
			  })
			: null
	}, [error])

	return (
		<div className={`card-list ${layout === 'horizontal' ? 'card-list--horizontal' : ''}`}>
			{loading ? (
				<CardListSkeleton />
			) : (
				<>
					{products.map(product => (
						<Card key={product.id} product={product} />
					))}
					{!endProduct && (
						<button className="card-list__load-more" onClick={loadProducts}>
							Загрузить ещё
						</button>
					)}
				</>
			)}
		</div>
	)
}

export default CardList
