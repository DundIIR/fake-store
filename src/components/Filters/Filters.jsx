import { useEffect, useRef, useState } from 'react'
import RangeSlider from '../RangeSlider/RangeSlider'
import './_filters.scss'
import { getAllCategories } from '../../services/fake-api-store'

const Filters = ({ onFilters }) => {
	const [categories, setCategories] = useState([])
	const [rangeValue, setRangeValue] = useState(300)
	const checkboxes = useRef([])

	useEffect(() => {
		const getCategories = async () => {
			const data = await getAllCategories()
			setCategories(data)
		}

		getCategories()
	}, [])

	const handleSubmit = e => {
		e.preventDefault()
		const selectedCategories = checkboxes.current.filter(checkbox => checkbox && checkbox.checked).map(checkbox => checkbox.value)
		onFilters(selectedCategories, rangeValue)
	}

	return (
		<aside className="filters">
			<h2 className="filters__title">Фильтры:</h2>
			<div className="filters__section">
				<h3 className="filters__subtitle">Стоимость</h3>
				<RangeSlider min="0" max="1000" inValue={rangeValue} onChange={setRangeValue} />
			</div>
			<div className="filters__section">
				<h3 className="filters__subtitle">Категории</h3>
				<form onSubmit={handleSubmit}>
					<ul className="filters__categories">
						{categories.map((category, i) => (
							<li key={i} className="filters__item">
								<label>
									<input type="checkbox" className="filters__input" value={category} ref={el => (checkboxes.current[i] = el)} />
									{category}
									<span className="control-mark"></span>
								</label>
							</li>
						))}
					</ul>
					<button type="submit" className="filters__btn">
						показать
					</button>
				</form>
			</div>
		</aside>
	)
}

export default Filters
