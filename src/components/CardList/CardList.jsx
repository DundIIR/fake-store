import './_cardList.scss'
import Card from '../Card/Card'
import { useState, useEffect, useRef } from 'react'

import { getProducts } from '../../services/fake-api-store'
import CardListSkeleton from '../Skeleton/CardListSkeleton'
import { useToast } from '@chakra-ui/react'

const CardList = ({ layout, searchQuery, sortValue, rangePrice, selectedCategories }) => {
	const [products, setProducts] = useState([]) // массив товаров
	const [loading, setLoading] = useState(true) // скелетон загрузки
	const [error, setError] = useState() // ошибки
	const [endProduct, setEndProduct] = useState(false) // конец товаров
	const toast = useToast() // tost для уведомления об ошибках

	useEffect(() => {
		console.log('рендер')
	})

	const offsetRef = useRef(0) // сдвиг запроса товаров

	const PRODUCTS_PER_PAGE = 9 // количество загружаемых товаров

	// Данная функция нужна для увеличения значения offset при загрузки дополнительных товаров по кнопке "загрузить еще"
	const addLoadProducts = () => {
		console.log('addLoad')
		offsetRef.current += PRODUCTS_PER_PAGE
		setLoading(true)
		loadProducts()
	}

	// Данная функция нужна для загрузки продуктов с сервера при различных состояниях поиска и сдвига
	const loadProducts = async () => {
		try {
			console.log('load/ offset = ' + offsetRef.current)
			const limit = offsetRef.current + PRODUCTS_PER_PAGE
			console.log(sortValue)
			const newProducts = await getProducts(limit, offsetRef.current, searchQuery, sortValue, rangePrice, selectedCategories)

			if (newProducts.length < PRODUCTS_PER_PAGE) {
				setEndProduct(true)
			}
			console.log('Загрузилось продуктов:', newProducts.length)
			setProducts(prevProducts => [...prevProducts, ...newProducts])
			setLoading(false)
			setError(null)
		} catch (err) {
			setError(err)
			setLoading(true)
		}
	}

	// Данный эффект применяется когда изменяется searchQuery. Очищает текущий список продуктов и сбрасывает offset, чтобы при новом поиске, данные о товарах по новому загружались
	useEffect(() => {
		console.log('searchQuery')

		setProducts([])
		setLoading(true)
		offsetRef.current = 0
		setEndProduct(false)
		loadProducts()
	}, [searchQuery, sortValue, rangePrice, selectedCategories])

	// Данный эффект применяется когда изменяется error. Показывает toast уведомление в случае ошибки
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
		<div className={`card-list card-list--horizontal`}>
			{products.map(product => (
				<Card key={product.id} product={product} layout={'basket'} />
			))}
			{loading ? (
				<CardListSkeleton />
			) : (
				<>
					{!endProduct && (
						<button className="card-list__load-more" onClick={addLoadProducts}>
							Загрузить ещё
						</button>
					)}
				</>
			)}
		</div>
	)
}

export default CardList
