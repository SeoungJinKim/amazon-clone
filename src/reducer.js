export const initialState = {
	basket: [],
};

// Day 3 강의
// Selector
export const getBasketTotal = basket => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TO_BASKET':
			return {
				...state,
				basket: [...state.basket, action.item],
			};
		case 'REMOVE_FROM_BASKET':
			/*
			// 내가 작성한 답
			return {
				...state,
				basket: state.basket
					.filter(item => item.index !== action.index)
					.map((item, index) => (item.index > action.index ? { ...item, index } : item)),
				// basket: state.basket.filter(item => item.index !== action.index),
			};*/
			const index = state.basket.findIndex(basketItem => basketItem.id === action.id);
			let newBasket = [...state.basket];

			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.warn(`Cant remove product (id: ${action.id}) as its not in basket!`);
			}
			return {
				...state,
				basket: newBasket,
			};

		/*
			// 이렇게 작성하면 id가 같은 item들이 한번에 삭제됨
			return { ...state, basket: state.basket.filter(item => item.id !== action.id) };*/
		default:
			return state;
	}
};

export default reducer;
