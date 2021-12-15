/** @format */

import axios from 'axios';
// baseUrl
export default axios.create({
	baseURL: `https://api.punkapi.com/v2/`,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		Authorization: 'Bearer',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers':
			'Origin, X-Requested-With, Content-Type, Accept',
		'x-ratelimit-limit': 3600,
		'x-ratelimit-remaining': 3587,
	},
});
