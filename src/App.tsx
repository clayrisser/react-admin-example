import React, { FC } from 'react';
import { Admin, Resource } from 'react-admin';
// import fakeDataProvider from 'ra-data-fakerest';
// import { PostList, PostShow, PostEdit, PostCreate } from './posts';
import indigo from '@material-ui/core/colors/grey';
import { createMuiTheme } from '@material-ui/core/styles';
import crudProvider from 'ra-data-nestjsx-crud';
import TableLayout from './Layouts/tableLayout';
import authProvider from './authProvider';
import configs from './routes/configs';

export interface AppProps {}

const dataProvider = crudProvider('http://localhost:3000');

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    secondary: indigo
  }
});

const App: FC<AppProps> = (_props: AppProps) => (
  <Admin
    layout={TableLayout}
    theme={theme}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource name="config" {...configs} />
  </Admin>
);

App.defaultProps = {};

export default App;
