import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import SkillCard from './SkillCard';
import { addSkill } from '../action-creators'
import { createEmptyStore } from '../test-helpers'
import 'mutationobserver-shim';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const store = createEmptyStore()
  store.dispatch(addSkill(0, 'myName', 'myType', 0, 'myDetail'))
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><BrowserRouter><SkillCard id={0} /></BrowserRouter></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
