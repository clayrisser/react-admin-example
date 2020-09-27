import React, { FC } from 'react';
import fakeDataProvider from 'ra-data-fakerest';
import { Admin, Resource, ListGuesser } from 'react-admin';
import data from './data';

export interface AppProps {}

const App: FC<AppProps> = (_props: AppProps) => (
  <Admin dataProvider={fakeDataProvider(data)}>
    <Resource name="posts" list={ListGuesser} />
  </Admin>
);

App.defaultProps = {};

export default App;
