import { useEffect, useState } from 'react'
import RangeSlider from '../RangeSlider/RangeSlider'
import './_filters.scss'
import { getAllCategories } from '../../services/fake-api-store'

const Filters = () => {
	const [categories, setCategories] = useState([])

	useEffect(() => {
		const getCategories = async () => {
			const data = await getAllCategories()
			setCategories(data)
		}

		getCategories()
	}, [])

	return (
		<aside className="filters">
			<h2 className="filters__title">Фильтры:</h2>
			<div className="filters__section">
				<h3 className="filters__subtitle">Стоимость</h3>
				<RangeSlider min="0" max="5000" inValue="3000" />
			</div>
			<div className="filters__section">
				<h3 className="filters__subtitle">Категории</h3>
				<ul className="filters__categories">
					{categories.map(category => (
						<li key={category} className="filters__item">
							<label>
								<input className="filters__input" type="checkbox" /> {category[0].toUpperCase() + category.slice(1)}
								<span className="control-mark"></span>
							</label>
						</li>
					))}
				</ul>
			</div>
		</aside>
	)
}

export default Filters
