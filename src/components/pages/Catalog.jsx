import './_pages.scss'
import Header from '../Header/Header'
import Filters from '../Filters/Filters'
import { CardListCatalog } from '../CardList/CardList'
import Footer from '../Footer/Footer'
import { useState } from 'react'

const Catalog = () => {
	const USER_ID = 5

	const [searchQuery, setSearchQuery] = useState('')
	const [sortValue, setSortValue] = useState('popular')
	const [rangePrice, setRangePrice] = useState(300)
	const [selectedCategories, setSelectedCategories] = useState([])

	const handleSearch = (query, sort) => {
		setSearchQuery(query)
		setSortValue(sort)
	}

	const handleSort = sort => {
		setSortValue(sort)
	}

	const handleFilters = (categories, price) => {
		setSelectedCategories(categories)
		setRangePrice(price)
	}

	return (
		<>
			<Header onSearch={handleSearch} onSort={handleSort} userID={USER_ID} />
			<main className='main'>
				<div className='container main--catalog'>
					<Filters onFilters={handleFilters} />
					<CardListCatalog
						className='card-list'
						searchQuery={searchQuery}
						sortValue={sortValue}
						rangePrice={rangePrice}
						selectedCategories={selectedCategories}
						layout={'catalog'}
					/>
				</div>
			</main>
		</>
	)
}

export default Catalog
