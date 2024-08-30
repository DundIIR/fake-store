import './_order.scss'
import { getCountProductsBasket } from '../../services/fake-api-store'
import { useEffect, useState } from 'react'

const Order = ({ userID }) => {
	const [countProducts, setCountProducts] = useState(0)

	useEffect(() => {
		const fetchProductCount = async () => {
			try {
				const count = await getCountProductsBasket(userID)
				setCountProducts(count)
			} catch (error) {
				console.error('Ошибка запроса количества продуктов:', error)
			}
		}

		fetchProductCount()
	}, [userID])

	return (
		<aside className='order'>
			<button className='order__btn'>Заказать</button>
			<p className='order__count'>Товары {countProducts}шт</p>
			<div className='order__price'>
				<p className='order__price--text'>Итого:</p>
				<span className='order__price--number'>
					51.99
					<span className='order__price--currency'>$</span>
				</span>
			</div>
		</aside>
	)
}

export default Order
