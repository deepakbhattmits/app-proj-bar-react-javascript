/** @format */

import { beerConstants } from '../../constants';
const initialState = {
	beers: {},
	addFbeers: {},
	favorites: {},
};
//getBeer
export const getBeer = (state = { initialState }, action) => {
	switch (action.type) {
		case beerConstants.GET_BEERS:
			//  console.log(" ", action.type);
			return Object.assign({}, state, { beers: action.payload });

		case beerConstants.GET_BEER_BY_NAME:
			return Object.assign({}, state, { beers: action.payload });

		case beerConstants.ADD_FAVORITE:
			if (
				state === undefined &&
				state === '' &&
				state.some((el) => el === action.payload)
			) {
				return state;
			} else {
				const addFbeers = {
					...state.addFbeers,
					[action.payload.id]: action.payload,
				};
				const favorites = {
					...state.favorites,
					[action.payload.id]: action.payload,
				};
				return Object.assign({}, state, {
					addFbeers: addFbeers,
					favorites: favorites,
				});
			}
		case beerConstants.REMOVE_FAVORITE:
			if (
				state === undefined &&
				state === '' &&
				state.some((el) => el === action.payload)
			) {
				return state;
			} else {
				const want = Object.values(state.addFbeers).filter(
					(el) => parseInt(el.id) !== parseInt(action.payload)
				);
				return Object.assign({}, state, {
					addFbeers: want,
					favorites: want,
				});
			}
		default:
			return state;
	}
};
