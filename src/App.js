import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import EntryPage from './page/entry/EntryPage';
import Defaultlayout from './layout/Defaultlayout';
import DashboardPage from './page/dashboard/DashboardPage';

function App() {
  return (
    <div className="App">
      {/*<EntryPage />
       */}

      <Defaultlayout>
        <DashboardPage />
      </Defaultlayout>
    </div>
  );
}

export default App;
