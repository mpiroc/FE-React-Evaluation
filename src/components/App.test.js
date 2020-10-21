import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'mutationobserver-shim';
import App from './App';
import { createEmptyStore } from '../test-helpers'


it('renders without crashing', () => {
    const store = createEmptyStore()

    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
