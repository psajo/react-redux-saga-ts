import { all } from '@redux-saga/core/effects';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import myUserReducer from '../../user/state/ducks';
import mySearchReducer from '../state/ducks';
import SearchInput from './SearchInput';
import searchSaga from '../../search/state/saga';
import userSaga from '../../user/state/saga';
<<<<<<< HEAD
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
=======
import { AxiosRequestConfig } from 'axios';
>>>>>>> d2bb2c78b4e5f0447e3786a0d42599cbe6b4c039

let store: any;

beforeEach(() => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const sagaMiddleware = createSagaMiddleware();
  const reducer = combineReducers({
    search: mySearchReducer,
    user: myUserReducer
  });
  store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  function* rootSaga() {
    yield all([searchSaga(), userSaga()]);
  }
  sagaMiddleware.run(rootSaga);
});
test('should show inputbox when rendering', () => {
  //given
  //when
  render(
    <Provider store={store}>
      <SearchInput />
    </Provider>
  );

  //then
  const inputbox = screen.getByRole('combobox');
  expect(inputbox).toBeDefined();
});

<<<<<<< HEAD
test('should show changed text when change text', async () => {
  //given
  const mock = new MockAdapter(axios);
  mock.onGet('/user/search').reply(200, {
    data: [{ name: 'park', tag: 'study', department: 'dst' }]
  });
  let callCount = 0;
  render(
    <Provider store={store}>
      <SearchInput />
    </Provider>
  );

  //when
  const inputbox = screen.getByRole('combobox');
  fireEvent.change(inputbox, { target: { value: 'user1' } });
  const text = inputbox.getAttribute('value');
  await setTimeout(() => {}, 3000);

  //then
  expect(text).toBe('user1');
});

test('should be called mock function when change text', async () => {
  // //given
  // render(
  //   <Provider store={store}>
  //     <SearchInput />
  //   </Provider>
  // );
  // //when
  // const inputbox = screen.getByRole('combobox');
  // fireEvent.change(inputbox, { target: { value: 'user1' } });
  // const text = inputbox.getAttribute('value');
  // await setTimeout(() => {}, 3000);
  // screen.debug();
});
=======
// test('should show changed text when change text', async () => {
//   //given
//   render(
//     <Provider store={store}>
//       <SearchInput />
//     </Provider>
//   );

//   //when
//   const inputbox = screen.getByPlaceholderText('???????????? ??????????????????');
//   fireEvent.change(inputbox, { target: { value: 'user1' } });
//   const text = inputbox.getAttribute('value');
//   await setTimeout(() => {}, 3000);
//   //then
//   expect(text).toBe('user1');
// });

// test('should be called mock function when change text', async () => {
//   //given

//   render(
//     <Provider store={store}>
//       <SearchInput />
//     </Provider>
//   );

//   //when
//   const inputbox = screen.getByRole('combobox');
//   fireEvent.change(inputbox, { target: { value: 'user1' } });
//   const text = inputbox.getAttribute('value');
//   await setTimeout(() => {}, 3000);
//   screen.debug();
// });
>>>>>>> d2bb2c78b4e5f0447e3786a0d42599cbe6b4c039
