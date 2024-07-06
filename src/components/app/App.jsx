import './_app.scss'
import Logo from '../../resources/img/logo.svg'
import Header from '../Header/Header'
import Filters from '../Filters/Filters'
import { ChakraProvider } from '@chakra-ui/react'
import CardList from '../CardList/CardList'
import Footer from '../Footer/Footer'

function App() {
	return (
		<>
			<Header />
			<main>
				<div className="container main">
					<Filters />
					<CardList className="card-list" />
				</div>
			</main>
			<Footer />
		</>
	)
}

export default App
