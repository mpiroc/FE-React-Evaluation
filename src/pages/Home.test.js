import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Home from './Home';
import { createEmptyStore } from '../test-helpers';
import 'mutationobserver-shim';

it('renders without crashing', () => {
  const store = createEmptyStore();
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><Home /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
