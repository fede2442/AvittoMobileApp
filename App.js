import React  from 'react';
import Navigator from './routes/homeStack';
import { Provider } from 'react-redux';
import store from './redux/store';
import { LogBox } from 'react-native';

const App = () => {

  return (
      <Provider store={store}>
        <Navigator />
      </Provider>
  );
  LogBox.ignoreAllLogs();
};


export default App;
