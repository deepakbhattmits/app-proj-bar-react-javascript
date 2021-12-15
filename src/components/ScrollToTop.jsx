/** @format */

import { useEffect } from 'react';

const ScrollToTop = ({ history, location, children }) => {
	// console.log('//import React from 'react'; : ', history);
	useEffect(() => {
		//  Keep default behavior of restoring scroll position when user:
		// - clicked back button
		// - clicked on a link that programmatically calls `history.goBack()`
		// - manually changed the URL in the address bar (here we might want
		//  to scroll to top, but we can't differentiate it from the others)
		if (history.action === 'POP') {
			return;
		}
		// In all other cases, check fragment/scroll to top
		let hash = location.hash;
		// console.log('HASH  > :  ', hash);
		if (hash) {
			let element = document.querySelector(hash);
			if (element) {
				element.scrollIntoView({ block: 'start', behavior: 'smooth' });
			}
		} else {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}, [history, location]);

	return children;
};

export default ScrollToTop;
