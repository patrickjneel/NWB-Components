import React from 'react';
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './configureStore'
import CropPlaningHomepage from '../CropPlaningHomepage';
import BaseLine from '../BaseLine'

const cropStore = configureStore();

const InputPrograms = () => (
  <Provider store={cropStore}>
    <p>Stuff should go here</p>
    <ConnectedRouter history={history}>
      <Route exact path="/r2/sub" component={CropPlaningHomepage} />
      <Route path="/r2/sup" component={BaseLine} />
    </ConnectedRouter>
  </Provider>
);

export default InputPrograms;
