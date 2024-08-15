import './_app.scss'
import Logo from '../../resources/img/logo.svg'
import Header from '../Header/Header'
import Filters from '../Filters/Filters'
import { ChakraProvider } from '@chakra-ui/react'
import CardList from '../CardList/CardList'
import Footer from '../Footer/Footer'
import { useState } from 'react'

function App() {
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
			<Header onSearch={handleSearch} onSort={handleSort} />
			<main>
				<div className="container main">
					<Filters onFilters={handleFilters} />
					<CardList
						className="card-list"
						searchQuery={searchQuery}
						sortValue={sortValue}
						rangePrice={rangePrice}
						selectedCategories={selectedCategories}
					/>
				</div>
			</main>
			<Footer />
		</>
	)
}

export default App
