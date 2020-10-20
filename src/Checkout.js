import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import Basket from './Basket';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
	const [{ basket }, dispatch] = useStateValue();

	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					className="checkout__ad"
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
					alt="advertise"
				/>

				<div>
					<h2 className="checkout__title">Your shopping Basket</h2>

					{/* BasketItem */}
					{/* 강의 답 */}
					{basket.map(item => (
						<CheckoutProduct
							id={item.id}
							image={item.image}
							title={item.title}
							rating={item.rating}
							price={item.price}
						></CheckoutProduct>
					))}
				</div>
				{/* 내가 작성한 답}
				{/*<div className="checkout__basket">
					{basket.map(item => (
						<Basket
							index={item.index}
							image={item.image}
							title={item.title}
							rating={item.rating}
							price={item.price}
						/>
					))}
				</div>*/}
			</div>
			<div className="checkout__right">
				<Subtotal />

				<h2>The subtotal will go here</h2>
			</div>
		</div>
	);
}

export default Checkout;
