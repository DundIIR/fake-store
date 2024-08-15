import './_header.scss'
import Logo from '../../resources/img/logo.svg'
import { useState } from 'react'

const Header = ({ onSearch, onSort }) => {
	const [searchQuery, setSearchQuery] = useState('')
	const [sortValue, setSortValue] = useState('popular')

	const handleSearch = e => {
		e.preventDefault()
		onSearch(searchQuery, sortValue)
	}

	const handleSort = e => {
		const newSortValue = e.target.value
		setSortValue(newSortValue)
		onSort(newSortValue)
	}

	return (
		<div className="container">
			<header className="header">
				<h1 className="visually-hidden">Fake Store - интернет магазин</h1>
				<img className="header__logo" src={Logo} alt="Fake Store Logo" />
				<div className="header__line">
					<form className="header__form form" onSubmit={handleSearch}>
						<input
							className="form__input"
							type="text"
							placeholder="Текст поиска"
							value={searchQuery}
							onChange={e => setSearchQuery(e.target.value)}
						/>
						{searchQuery ? (
							<span className="form__clear-btn" onClick={() => setSearchQuery('')}>
								<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M13 1L1 13M13 13L1 1" stroke="black" stroke-width="2" stroke-linecap="round" />
								</svg>
							</span>
						) : null}
						<button className="form__btn" type="submit">
							Найти
						</button>
					</form>
					<nav className="header__nav nav">
						<a className="nav__link nav__link--basket" href="#">
							<span className="nav__count">2</span>Корзина
						</a>
						<a className="nav__link nav__link--favorite" href="#">
							Избранное
						</a>
						<a className="nav__link" style={{ color: '#999', cursor: 'default' }} href="#">
							Войти
						</a>
					</nav>
				</div>
				<div className="header__line">
					<div className="header__sorting sorting">
						<label className="sorting__label" htmlFor="sort">
							СОРТИРОВКА:
						</label>
						<select id="sort" className="sorting__select" value={sortValue} onChange={handleSort}>
							<option value="popular">Сначала популярные</option>
							<option value="expensive">Сначала дорогие</option>
							<option value="cheap">Сначала дешевые</option>
						</select>
					</div>
					<div className="header__links">
						<a href="#">ДОСТАВКА</a>
						<a href="#">ГАРАНТИЯ</a>
						<a href="#">КОНТАКТЫ</a>
					</div>
				</div>
			</header>
		</div>
	)
}

export default Header
