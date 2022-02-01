import React  from 'react';
import Navigator from './routes/homeStack';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {

  return (
      <Provider store={store}>
        <Navigator />
      </Provider>
  );
};


export default App;
