import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { getRoutes } from './routes'; //
import configureStore from './store';//

const store = configureStore();

render (
	<Provider store={store}>
		<Router routes={getRoutes(store)} history={browserHistory} />
	</Provider>,
	document.getElementById('app')
);
