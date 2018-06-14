import { h } from 'preact';
import { Router } from 'preact-router';
import AsyncRoute from 'preact-async-route';

import Header from './header';
import Home from '../routes/home';

const handleRoute = e => {
	this.currentUrl = e.url;
};

const getProfileRoute = (url, cb, props) => import('../routes/profile').then(module => module.default);

const App = () => {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */

	return (
		<div id="app">
			<Header />
			<Router onChange={handleRoute}>
				<Home path="/" />
				<AsyncRoute
					path="/profile/"
					user="me"
					getComponent={getProfileRoute}
				/>
			</Router>
		</div>
	);
};

export default App;