import RangeSlider from '../RangeSlider/RangeSlider'
import './_filters.scss'

const Filters = () => {
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
					<li className="filters__item">
						<label>
							<input className="filters__input" type="checkbox" checked /> Men`s clothing
							<span className="control-mark"></span>
						</label>
					</li>

					<li className="filters__item">
						<label>
							<input className="filters__input" type="checkbox" /> Jewelry
							<span className="control-mark"></span>
						</label>
					</li>
					<li className="filters__item">
						<label>
							<input className="filters__input" type="checkbox" /> Electonics
							<span className="control-mark"></span>
						</label>
					</li>
					<li className="filters__item">
						<label>
							<input className="filters__input" type="checkbox" checked /> Woomen`s clothing
							<span className="control-mark"></span>
						</label>
					</li>
				</ul>
			</div>
		</aside>
	)
}

export default Filters
