import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Skills from './Skills';
import { createEmptyStore } from '../test-helpers';
import 'mutationobserver-shim';

it('renders without crashing', () => {
  const store = createEmptyStore();
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><Skills /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
