import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
} from './constants';
import * as actions from './actions';

import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureStore([thunkMiddleware]);

it('should create an actions to search robots', () => {
  const text = 'woo';
  const expectedActions = {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  };

  expect(actions.setSearchField(text)).toEqual(expectedActions);
});

it('handles requesting robots API', () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots());
  const action = store.getActions();
  //    console.log(action);
  const expectedActions = {
    type: REQUEST_ROBOTS_PENDING,
  };
  expect(action[0]).toEqual(expectedActions);
});
