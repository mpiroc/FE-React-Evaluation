import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Interest from './Interest';
import { addInterest } from '../action-creators'
import { createEmptyStore } from '../test-helpers'
import 'mutationobserver-shim';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const store = createEmptyStore()
    store.dispatch(addInterest(0, 'myName', 'myType', true, 'myDetail'))
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <MemoryRouter initialEntries={['/interest/0']} >
                <Interest />
            </MemoryRouter>
        </Provider>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
