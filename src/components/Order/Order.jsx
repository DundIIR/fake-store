import './_order.scss'
import { getCountProductsBasket, getProductsBasket } from '../../services/fake-api-store'
import { useEffect, useState } from 'react'
import { ChakraProvider, useToast } from '@chakra-ui/react'

const Order = ({ userID }) => {
	const [countProducts, setCountProducts] = useState(0)
	const [price, setPrice] = useState(0)
	const toast = useToast()

	useEffect(() => {
		const fetchProductCount = async () => {
			try {
				const count = await getCountProductsBasket(userID)
				const totalAmount = await getProductsBasket(userID)
				const setTotalAmount = totalAmount.reduce((sum, product) => {
					return sum + product.price * product.quantity
				}, 0)
				setCountProducts(count)
				setPrice(setTotalAmount)
			} catch (error) {
				console.error('Ошибка запроса количества продуктов:', error)
			}
		}

		fetchProductCount()
	}, [userID])

	const handleOrder = () => {
		toast({
			title: 'Нельзя оформить заказ',
			description: 'Просим прощения, данная функция еще не доступна',
			status: 'info',
			duration: 7000,
			isClosable: true,
		})
	}

	return (
		<ChakraProvider>
			<aside className="order">
				<button className="order__btn" onClick={handleOrder}>
					Заказать
				</button>
				<p className="order__count">Товары {countProducts}шт</p>
				<div className="order__price">
					<p className="order__price--text">Итого:</p>
					<span className="order__price--number">
						{price}
						<span className="order__price--currency">$</span>
					</span>
				</div>
			</aside>
		</ChakraProvider>
	)
}

export default Order
