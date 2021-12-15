/** @format */

import { useState } from 'react';
import { Link } from 'react-router-dom';
const Favorite = ({ fBeers, umarkFav }) => {
	// console.log('props:');
	const [hover, setHover] = useState(false);
	const toggleHover = ({ fBeers, umarkFav }) => {
		setHover(!hover);
	};
	const handleRemove = (e) => {
		umarkFav(e.target.id);
	};
	const renderFav = () => {
		if (!!fBeers && Object.values(fBeers).length === 0) {
			return (
				<div className='loading'>
					<h1 className='ui header'>No any favorite items</h1>
					<Link
						to='/home'
						onMouseEnter={toggleHover}
						onMouseLeave={toggleHover}>
						<i className={`icon hand point left ${hover ? '' : 'outline'}`} />
						Go Back
					</Link>
				</div>
			);
		}
		return (
			!!fBeers &&
			Object.values(fBeers).map((el, i, self) => {
				return (
					<div className='card a' key={i}>
						<div className='ui medium image'>
							<img
								className='ui medium image'
								src={el.image_url}
								alt='img'
								style={{ width: 200, height: 200 }}
							/>
						</div>
						<div className='content'>
							<i
								id={el.id}
								className='right floated star icon green'
								title='Unmark Favorite'
								onClick={handleRemove}
							/>
							<div className='header'>{el.name}</div>
							<div className='meta'>
								<label>{el.tagline}</label>
							</div>
							<div className='description'>{el.description}</div>
						</div>
					</div>
				);
			})
		);
	};
	return (
		<>
			<div className='item'>
				<h3 className='text-capitalize'> favorite page </h3>
			</div>
			<div className='ui link cards favorite'>{renderFav()}</div>
		</>
	);
};
export default Favorite;
