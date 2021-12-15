/** @format */

//import React from 'react';
const SearchComoponent = ({
	classNameSearch,
	handleChange,
	onKeyUp,
	classNameButton,
	buttonClick,
}) => {
	// console.log(classNameSearch,
	// handleChange,
	// onKeyUp,
	// classNameButton,
	// buttonClick,"Props");
	return (
		<div className='ui category search'>
			<div className='ui icon input'>
				<input
					className={classNameSearch}
					name='beerName'
					type='text'
					placeholder='Search for Beer...'
					autoComplete='off'
					onChange={handleChange}
					onKeyUp={onKeyUp}
				/>
				<span className={classNameButton} onClick={buttonClick}>
					Search
				</span>
			</div>
		</div>
	);
};
export default SearchComoponent;
