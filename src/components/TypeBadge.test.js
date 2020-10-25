import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TypeBadge from './TypeBadge';
import { createEmptyStore } from '../test-helpers'
import 'mutationobserver-shim';

it('renders small badges without crashing', () => {
    const store = createEmptyStore()
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><TypeBadge type='Sport' size='small' /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders normal-sized badges without crashing', () => {
    const store = createEmptyStore()
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><TypeBadge type='Sport' size='normal' /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders badges with unknown types and sizes without crashing', () => {
    const store = createEmptyStore()
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><TypeBadge type='faketype' size='fakesize' /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
