import React from 'react';
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './configureStore'
import CropPlaningHomepage from '../CropPlaningHomepage';
import BaseLine from '../BaseLine'

const cropPaining = configureStore();

const InputPrograms = () => (
  <Provider store={cropPaining}>
    <p>Stuff should go here</p>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/sub" component={CropPlaningHomepage} />
        <Route path="/sup" component={BaseLine} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default InputPrograms;
