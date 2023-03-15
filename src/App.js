import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import EntryPage from './page/entry/EntryPage';
import Defaultlayout from './layout/Defaultlayout';
import DashboardPage from './page/dashboard/DashboardPage';
import AddTicketsPage from './page/new-ticket/AddTicketsPage';

function App() {
  return (
    <div className="App">
      {/*<EntryPage />
       */}

      <Defaultlayout>
        {/* <DashboardPage /> */}
        <AddTicketsPage/>
      </Defaultlayout>
    </div>
  );
}

export default App;
