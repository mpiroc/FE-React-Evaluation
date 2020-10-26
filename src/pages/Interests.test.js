import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Interests from './Interests';
import { createEmptyStore } from '../test-helpers';
import 'mutationobserver-shim';

it('renders without crashing', () => {
  const store = createEmptyStore();
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><Interests /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
