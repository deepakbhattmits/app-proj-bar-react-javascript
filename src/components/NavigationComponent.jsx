/** @format */

//import React from 'react';
// import React, { useRef, useEffect, useCallback } from 'react';
// import { ReactComponent as CalenderSVG } from '../assets/images/icon-calendar.svg';

import { NavLink } from 'react-router-dom';
// import daterangepicker from 'daterangepicker';

const Navigation = (props) => {
	//  console.log('TEST : ');
	// const datePicker = useRef();
	// const dateRange = useCallback((datePicker) => {
	// 	new daterangepicker(
	// 		datePicker,
	// 		{
	// 			timePicker: true,
	// 			singleDatePicker: true,
	// 			showDropdowns: true,
	// 			locale: {
	// 				format: 'MMMM DD YYYY',
	// 			},
	// 			minYear: 1901,
	// 			maxYear: 2020,
	// 		},
	// 		function (start, end, label) {
	// 			// console.log(
	// 			// 	'new date selection was made: ',
	// 			// 		start.format('MMMM-DD-YYYY') ,
	// 			// 		' to ' ,
	// 			// 		end.format('MMMM-DD-YYYY')
	// 			// );
	// 		}
	// 	);
	// }, []);
	// useEffect(() => {
	// 	console.log('datePicker');
	// 	dateRange(datePicker.current);
	// }, []);
	return (
		<div className='ui secondary  menu'>
			<div className='item'>
				<NavLink className='ui header text-capitalize' to='/'>
					Project Name
				</NavLink>
			</div>
			{/* <div id='reportrange' className='date-range-wrapper'>
				<CalenderSVG className='icon icon--cal' />
				<input
					ref={datePicker}
					type='text'
					name='daterange'
					placeholder='January 22 2020'
					className='date--input'
				/>
			</div> */}
			<div className='right menu'>
				<NavLink className='item text-uppercase' to='/home'>
					home
				</NavLink>
				<NavLink className='item text-uppercase' to='/favorite'>
					favorite
				</NavLink>
			</div>
		</div>
	);
};
export default Navigation;
