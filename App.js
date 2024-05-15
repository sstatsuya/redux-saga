import React from 'react';
import {Text, View} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import Home from './src/index'

export default App = () => {
  return (
    <Provider store={store}>
        <Home/>
    </Provider>
  );
};
