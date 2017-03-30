import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { getRoutes } from './routes';
import configureStore from './store';
// eslint-disable-next-line
import globalStyl from './styles/global.styl';
// eslint-disable-next-line
import variablesStyl from './styles/variables.styl';

if ('serviceWorker' in navigator) {
	console.log('have serviceWorker');
	navigator.serviceWorker
		.register('assets/javascript/service-worker.js')
			.then((model) => {
				console.log('Service Worker Registered');
				console.log(model);
			});
}

const store = configureStore();

render(
	<Provider store={store}>
		<Router routes={getRoutes(store)} history={browserHistory} />
	</Provider>,
	document.getElementById('app')
);
