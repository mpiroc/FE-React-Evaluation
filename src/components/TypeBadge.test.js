import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TypeBadge from './TypeBadge';
import { createEmptyStore } from '../test-helpers';
import 'mutationobserver-shim';

it('renders known types without crashing', () => {
    const store = createEmptyStore();
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><TypeBadge typeMap={{ MyType: '1' }} type='MyType' size={'normal'} /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders unknown types without crashing', () => {
    const store = createEmptyStore();
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><TypeBadge typeMap={{ MyType: '1' }} type='NotMyType' size={'normal'} /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders small badges without crashing', () => {
    const store = createEmptyStore();
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><TypeBadge typeMap={{ MyType: '1' }} type='MyType' size={'small'} /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});