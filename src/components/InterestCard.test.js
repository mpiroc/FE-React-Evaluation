import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import InterestCard from './InterestCard';
import { addInterest } from '../action-creators'
import { createEmptyStore } from '../test-helpers'
import 'mutationobserver-shim';

it('renders without crashing', () => {
  const store = createEmptyStore()
  store.dispatch(addInterest(0, 'myName', 'myType', true, 'myDetail'))
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><InterestCard id={0} /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
