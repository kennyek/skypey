import * as React from 'react';
import { StatelessComponent } from 'react';
import Main from 'src/components/Main';
import './App.css';
import Sidebar from './Sidebar';

const App: StatelessComponent<{}> = props => (
  <div className="App">
    <Sidebar />
    <Main />
  </div>
);

export default App;
