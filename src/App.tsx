import React from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import TableContainer from './Table/TableContainer';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className='app-wrapper' >
            <div className='app-wrapper-content'>
              <Switch>
                <Route exact path="/"
                  render={() => <Redirect to={'/table'} />} />
                <Route exact path="/site"
                  render={() => <Redirect to={'/table'} />} />
                <Route path="/table"
                  render={() => <TableContainer />} />

                <Route path="*"
                  render={() => <div>
                    <h4>Sorry, we can`t find this page.</h4>
                  </div>} />
              </Switch>
            </div>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
