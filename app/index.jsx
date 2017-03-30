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
	navigator.serviceWorker
		.register('/service-worker.js', { scope: './' })
		.then(() => {
			console.log('Service worker registered!');
		})
		.catch(() => {
			console.log('There was an error!');
		});
}

const store = configureStore();

render(
	<Provider store={store}>
		<Router routes={getRoutes(store)} history={browserHistory} />
	</Provider>,
	document.getElementById('app')
);