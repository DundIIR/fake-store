import Card from '../Card/Card'
import './_cardList.scss'
import image1 from '../../resources/img/image1.png'
import image2 from '../../resources/img/image2.png'

const CardList = ({ layout }) => {
	const products = [
		// {
		// 	id: 1,
		// 	category: "men's clothing",
		// 	name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 1...',
		// 	rating: 3.9,
		// 	price: 7.95,
		// 	image: image1,
		// },
		// {
		// 	id: 2,
		// 	category: "men's clothing",
		// 	name: 'Mens Casual Premium Slim Fit T-Shirts',
		// 	rating: 4.3,
		// 	price: 22.3,
		// 	image: image2,
		// },
		// {
		// 	id: 3,
		// 	category: "women's clothing",
		// 	name: "Opna Women's Short Sleeve Moisture",
		// 	rating: 4.5,
		// 	price: 137.95,
		// 	image: image1,
		// 	favorite: true,
		// },
		// {
		// 	id: 4,
		// 	category: "women's clothing",
		// 	name: "Opna Women's Short Sleeve Moisture",
		// 	rating: 4.5,
		// 	price: 137.95,
		// 	image: image1,
		// },
		// {
		// 	id: 5,
		// 	category: "women's clothing",
		// 	name: "Opna Women's Short Sleeve Moisture",
		// 	rating: 4.5,
		// 	price: 137.95,
		// 	image: image1,
		// },
	]
	return (
		<div className={`card-list ${layout === 'horizontal' ? 'card-list--horizontal' : ''}`}>
			{products.map(product => (
				<Card key={product.id} product={product} favorite={product.favorite} layout={layout} />
			))}
			<button className="card-list__load-more">Загрузить ещё</button>
		</div>
	)
}

export default CardList
