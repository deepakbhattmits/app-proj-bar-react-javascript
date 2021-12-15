/** @format */

// /** @format */

// import { Component } from 'react';
// import { connect } from 'react-redux';
// import { getBeerByName, getBeers } from '../actions';
// import SearchComponent from '../components/SearchComoponent';
// // todo : functional SearchPage( tricky)
// class SearchPage extends Component {
// 	state = {
// 		beerName: '',
// 	};
// 	getData = () => {
// 		if (beerName.length > 0) {
// 			this.props.getBeerByName(beerName);
// 		} else {
// 			this.props.getBeers();
// 		}
// 	};
// 	handleChange = (e) => {
// 		this.setState({ [e.target.name]: e.target.value }, () => {
// 			const timer = setTimeout(() => {
// 				this.getData();
// 				// console.log('Test  : ');
// 				this.props.setIsLoading(true);
// 			}, 1000);
// 			return () => {
// 				this.props.setIsLoading(false);
// 				clearTimeout(timer);
// 			};
// 		});
// 	};
// 	onKeyUp = (e) => {
// 		if (e.keyCode === 13) {
// 			this.buttonClick();
// 		}
// 	};
// 	buttonClick = () => {
// 		if (beerName.length > 0) {
// 			this.props.getBeerByName(beerName);
// 		} else {
// 			alert('Please Enter Search Term');
// 			this.props.getBeers();
// 		}
// 	};
// 	// componentWillUnmount() {
// 	//   clearTimeout(timer)
// 	// }
// 	render() {
// 		return (
// 			<div className='ui row'>
// 				<SearchComponent
// 					classNameButton='ui primary button'
// 					classNameSearch='custom-search'
// 					buttonClick={this.buttonClick}
// 					handleChange={this.handleChange}
// 					onKeyUp={this.onKeyUp}
// 				/>
// 			</div>
// 		);
// 	}
// }
// const mapDispatchToProps = (dispatch) => ({
// 	getBeerByName: (data) => dispatch(getBeerByName(data)),
// 	getBeers: () => dispatch(getBeers()),
// });
// // const mapStateToProps = ( state ) => {
// //     return {
// //         searchBeer: state.searchBeer,

// //     }
// // }
// export default connect(null, mapDispatchToProps)(SearchPage);

/** @format */

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getBeerByName, getBeers } from '../store/actions';
import SearchComponent from '../components/SearchComoponent';
//SearchPage
const SearchPage = (props) => {
	const dispatch = useDispatch();
	const [beerName, setBeerName] = useState('');
	const getData = () => {
		if (beerName.length > 0) {
			dispatch(getBeerByName(beerName));
		} else {
			dispatch(getBeers());
		}
	};
	const handleChange = (e) => {
		setBeerName(e.target.value);
		const timer = setTimeout(() => {
			getData();
			props.setIsLoading(true);
		}, 1000);
		return () => {
			props.setIsLoading(false);
			clearTimeout(timer);
		};
	};
	const onKeyUp = (e) => {
		if (e.keyCode === 13) {
			buttonClick();
		}
	};
	const buttonClick = () => {
		if (beerName.length > 0) {
			dispatch(getBeerByName(beerName));
		} else {
			alert('Please Enter Search Term');
			dispatch(getBeers());
		}
	};
	return (
		<div className='ui row'>
			<SearchComponent
				classNameButton='ui primary button'
				classNameSearch='custom-search'
				buttonClick={buttonClick}
				handleChange={handleChange}
				onKeyUp={onKeyUp}
			/>
		</div>
	);
};

export default SearchPage;
