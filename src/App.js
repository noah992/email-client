import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Layout from './features/Layout/Layout';
import { getEmail } from './features/utils/api/api';
import store from './features/utils/store/store';
import { Provider } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    getEmail().then(data => {
      store.dispatch({
        type:'getEmail',
        payload: data
      })
      store.dispatch({
        type:'openEmail',
        payload: data[0]
      })
    })
  }
  render() {
    return (
      <Provider store={store}>
        <Layout></Layout>
      </Provider>
    );
  }
}

export default App;
