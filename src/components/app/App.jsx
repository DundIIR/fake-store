import './_app.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Catalog, Basket } from '../pages'
import Footer from '../Footer/Footer'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/basket' element={<Basket />} />
				<Route path='/' element={<Catalog />}></Route>
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
