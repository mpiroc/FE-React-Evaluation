import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Skill from './Skill';
import { addSkill } from '../action-creators'
import { createEmptyStore } from '../test-helpers'
import 'mutationobserver-shim';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const store = createEmptyStore()
    store.dispatch(addSkill(0, 'myName', 'myType', 0, 'myDetail'))
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <MemoryRouter initialEntries={['/skill/0']} >
                <Skill />
            </MemoryRouter>
        </Provider>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
