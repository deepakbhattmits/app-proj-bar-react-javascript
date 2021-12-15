/** @format */
import { useSelector, useDispatch } from 'react-redux';
import FavoriteComponent from '../components/FavoriteComponent';
import { removeFromfavorites } from '../store/actions';
const FavoritePage = () => {
	const favoriteBeer = useSelector((state) => state.beerData.addFbeers);
	// console.log("test: ",favoriteBeer);
	const dispatch = useDispatch();
	return (
		<div className='ui row'>
			<FavoriteComponent
				fBeers={favoriteBeer}
				umarkFav={(e) => dispatch(removeFromfavorites(e))}
			/>
		</div>
	);
};
export default FavoritePage;
