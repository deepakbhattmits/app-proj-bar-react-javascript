/** @format */

import { useState } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	//  console.log('TEST : ');
	const [hover, setHover] = useState(false);
	const toggleHover = () => {
		setHover(!hover);
	};
	return (
		<div className='loading'>
			<h2 className='ui header'>OOPS something went wrong...</h2>
			<Link
				className={`${hover ? 'hovered' : 'unhover'}`}
				to='/home'
				onMouseEnter={toggleHover}
				onMouseLeave={toggleHover}>
				<i className={`icon hand point left ${hover ? '' : 'outline'}`} /> Go To
				Home
			</Link>
		</div>
	);
};
export default NotFound;
