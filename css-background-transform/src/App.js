import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/index";
import Auth from './loginSystem/Auth/Auth';
import Callback from './loginSystem/Callback/Callback';
import history from './loginSystem/history';
import { Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import ProductsScreen from './components/ProductsScreen/ProductsScreen'
import MyProfileScreen from './components/MyProfileScreen/MyProfileScreen'
import MyCoinsScreen from './components/MyCoinsScreen/MyCoinsScreen'

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <Router history={history}>
        <React.Fragment>
          <NavBar auth={auth}/>
          <Route exact path="/" render={(props) => <ProductsScreen auth={auth} {...props} />} />
          <Route exact path="/myprofile" render={(props) => <MyProfileScreen auth={auth} {...props} />} />
          <Route exact path="/mycoins" component={MyCoinsScreen} />
          <Route exact path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>
        </React.Fragment>
      </Router>
    </React.Fragment>
  </Provider>
);

export default App;
