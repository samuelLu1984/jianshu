import React, { Component,Fragment } from 'react';
import Header from './common/header'
import {BrowserRouter,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import Home from './pages/home'
import Detail from './pages/detail'
import store from'./store'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Header/>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </Fragment>
        </BrowserRouter>
         
      </Provider>     
    );
  }
}

export default App;
