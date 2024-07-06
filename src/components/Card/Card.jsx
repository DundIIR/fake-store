import './_card.scss'

const Card = ({ product, layout, favorite }) => {
	return (
		<div className={`card ${layout === 'horizontal' ? 'card--horizontal' : ''} ${favorite ? 'favorite-active' : ''}`}>
			<div className="block-image">
				<img src={product.image} alt={product.name} className="card__image" />
				<p className="card__category">{product.category}</p>
			</div>
			<div className="card__info">
				<p className="card__name">{product.name}</p>
				<div className="block-button">
					<p className="card__rating">
						{product.rating}{' '}
						<span>
							<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M9.5371 0.885422C9.72645 0.501755 10.2735 0.501755 10.4629 0.885422L12.9141 5.85204C12.9893 6.00439 13.1346 6.10999 13.3027 6.13442L18.7837 6.93085C19.2071 6.99238 19.3762 7.5127 19.0698 7.81134L15.1037 11.6773C14.9821 11.7959 14.9266 11.9668 14.9553 12.1342L15.8915 17.5931C15.9639 18.0147 15.5213 18.3363 15.1426 18.1372L10.2402 15.5599C10.0898 15.4809 9.91017 15.4809 9.75979 15.5599L4.85745 18.1372C4.47874 18.3363 4.03613 18.0147 4.10846 17.5931L5.04472 12.1342C5.07344 11.9668 5.01793 11.7959 4.89626 11.6773L0.930187 7.81134C0.623811 7.5127 0.792873 6.99238 1.21627 6.93085L6.69726 6.13442C6.86539 6.10999 7.01074 6.00439 7.08593 5.85204L9.5371 0.885422Z"
									fill="#FFC700"
								/>
							</svg>
						</span>
					</p>
					<button className="card__btn">
						{product.price}
						<span className="card__currency">$</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Card
