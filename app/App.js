import React from 'react';
import * as store from "./store";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider, connect } from "react-redux";
import { reduxifyNavigator,  createNavigationReducer } from 'react-navigation-redux-helpers';
import Welcome from "./components/Welcome";
import { Scene, Actions, Router } from 'react-native-router-flux';
import Test from "./components/Test";

const AppNavigator = Actions.create(
  <Scene key="root" hideNavBar>
    <Scene key="welcome" component={Welcome}/>
    <Scene key="test" component={Test} />
  </Scene>,
);
const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('welcome'));
export const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
const ReduxNavigator = reduxifyNavigator(AppNavigator, 'root');
const mapStateToProps = state => ({
  state: state.nav,
});
const ReduxRouter = connect(mapStateToProps)(Router);
export default class App extends React.Component {
  render(){
    return(
      <Provider store={store.store}>
        <PersistGate persistor={store.persistor}>
          <ReduxRouter navigator={ReduxNavigator}/>
        </PersistGate>
      </Provider>
    );
  }
}
