import React from 'react';
import './Basket.css';
import { useStateValue } from './StateProvider';

function Basket({ index, image, title, rating, price }) {
	const [{ basket }, dispatch] = useStateValue();

	const removeFromBasket = () => {
		// dispatch the item into the data layer
		dispatch({
			type: 'REMOVE_FROM_BASKET',
			index: index,
		});
	};
	return (
		<div className="basket">
			<img src={image} alt=""></img>
			<div className="basket__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<span role="img" aria-label="star">
								🌟
							</span>
						))}
				</div>
				<button onClick={removeFromBasket}>Remove from Basket</button>
			</div>
		</div>
	);
}

export default Basket;
