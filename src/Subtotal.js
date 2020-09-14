import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import Checkout from './Checkout';
import { useStateValue } from './StateProvider';

function Subtotal() {
	const [{ basket }, dispatch] = useStateValue();
	let subtotal = 0;
	return (
		<div className="subtotal">
			<CurrencyFormat
				subtotal={basket.map(item => (subtotal += item.price))}
				renderText={value => (
					<>
						<p>
							{/* Part of the homework */}
							Subtotal ({basket?.length} items): <strong>{value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" /> This order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={subtotal} // Part of the homework
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>
			<button>Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;
