import './_pages.scss'
import Order from '../Order/Order'
import Header from '../Header/Header'
import { CardListBasket } from '../CardList/CardList'

const Basket = () => {
	const USER_ID = 6
	return (
		<>
			<Header basket={true} userID={USER_ID}></Header>
			<main className="main">
				<div className="container main--basket">
					<CardListBasket className="card-list" layout={'basket'} userID={USER_ID} />
					<Order userID={USER_ID} />
				</div>
			</main>
		</>
	)
}

export default Basket
