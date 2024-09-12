import './_header.scss'
import Logo from '../../resources/img/logo.svg'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCountProductsBasket } from '../../services/fake-api-store'

const activeLink = isActive => ({
	opacity: isActive ? 0.8 : 1,
	transform: isActive ? 'scale(1.1)' : '',
	fontWeight: isActive ? 600 : '',
})

const Header = ({ onSearch, onSort, basket = false, userID = 0 }) => {
	const [searchQuery, setSearchQuery] = useState('')
	const [sortValue, setSortValue] = useState('popular')
	const [countProducts, setCountProducts] = useState(0)

	useEffect(() => {
		const fetchProductCount = async () => {
			try {
				const count = await getCountProductsBasket(userID)
				setCountProducts(count)
			} catch (error) {
				console.error('Ошибка запроса количества продуктов:', error)
			}
		}

		fetchProductCount()
	}, [userID])

	const handleSearch = e => {
		e.preventDefault()
		onSearch(searchQuery, sortValue)
	}

	const handleSort = e => {
		const newSortValue = e.target.value
		setSortValue(newSortValue)
		onSort(newSortValue)
	}

	return basket ? (
		<HeaderBasket countProducts={countProducts} />
	) : (
		<div className="container">
			<header className="header">
				<h1 className="visually-hidden">Fake Store - интернет магазин</h1>
				<NavLink end to=".">
					<img className="header__logo" src={Logo} alt="Fake Store Logo" />
				</NavLink>
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
						<NavLink end to="basket" className="nav__link nav__link--basket" style={({ isActive }) => activeLink(isActive)}>
							{countProducts ? <span className="nav__count">{countProducts}</span> : null}
							Корзина
						</NavLink>
						<NavLink end to="/" style={({ isActive }) => activeLink(isActive)} className="nav__link nav__link--favorite">
							Каталог
						</NavLink>
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

const HeaderBasket = ({ countProducts }) => {
	return (
		<div className="container">
			<header className="header header--basket">
				<h1 className="visually-hidden">Fake Store - интернет магазин</h1>
				<NavLink end to="/">
					<img className="header__logo" src={Logo} alt="Fake Store Logo" />
				</NavLink>
				<div className="header__line">
					<div className="header__links">
						<a href="#">ДОСТАВКА</a>
						<a href="#">ГАРАНТИЯ</a>
						<a href="#">КОНТАКТЫ</a>
					</div>
					<nav className="header__nav nav">
						<NavLink end to="." className="nav__link nav__link--basket" style={({ isActive }) => activeLink(isActive)}>
							{countProducts ? <span className="nav__count">{countProducts}</span> : null}
							Корзина
						</NavLink>
						<NavLink end to="/" style={({ isActive }) => activeLink(isActive)} className="nav__link nav__link--favorite">
							Каталог
						</NavLink>
						<a className="nav__link" style={{ color: '#999', cursor: 'default' }}>
							Войти
						</a>
					</nav>
				</div>
			</header>
		</div>
	)
}

export default Header
