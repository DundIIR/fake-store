import './_header.scss'
import Logo from '../../resources/img/logo.svg'

const Header = () => {
	return (
		<div className="container">
			<header className="header">
				<h1 className="visually-hidden">Fake Store - интернет магазин</h1>
				<img className="header__logo" src={Logo} alt="Fake Store Logo" />
				<div className="header__line">
					<form className="header__form form">
						<input className="form__input" type="text" placeholder="Текст поиска" />
						<button className="form__btn">Найти</button>
					</form>
					<nav className="header__nav nav">
						<a className="nav__link nav__link--basket" href="#">
							<span className="nav__count">2</span>Корзина
						</a>
						<a className="nav__link nav__link--favorite" href="#">
							Избранное
						</a>
						<a className="nav__link" href="#">
							Войти
						</a>
					</nav>
				</div>
				<div className="header__line">
					<div className="header__sorting sorting">
						<label className="sorting__label" htmlFor="sort">
							СОРТИРОВКА:
						</label>
						<select id="sort" className="sorting__select">
							<option value="cheap">Сначала дешевые</option>
							<option value="expensive">Сначала дорогие</option>
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
