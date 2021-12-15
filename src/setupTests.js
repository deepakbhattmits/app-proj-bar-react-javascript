/** @format */

import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
//setup tests
Enzyme.configure({
	adapter: new EnzymeAdapter(),
	disableLifecycleMethods: true,
});
