import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import EntryPage from './page/entry/EntryPage';
import Defaultlayout from './layout/Defaultlayout';
import DashboardPage from './page/dashboard/DashboardPage';
import AddTicketsPage from './page/new-ticket/AddTicketsPage';
import TicketsListsPage from './page/ticket-list/TicketsListsPage';
import TicketPage from './page/ticket/TicketPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PrivateRoute from './components/private-route/PrivateRouteComp';

function App() {
  return (
    <div className="App">
      <Router>
        <Defaultlayout>
          <Routes>
            <Route exact path="/" element={<EntryPage />} />

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DashboardPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/add-ticket"
              element={
                <PrivateRoute>
                  <AddTicketsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/tickets"
              element={
                <PrivateRoute>
                  <TicketsListsPage />
                </PrivateRoute>
              }
            />
            {/* <PrivateRoute path="/dashboard">
              <DashboardPage />
            </PrivateRoute>
            <PrivateRoute path="/ticket/:tid">
              <TicketPage />
            </PrivateRoute> */}

            <Route
              path="/ticket/:tid"
              element={
                <PrivateRoute>
                  <TicketPage />
                </PrivateRoute>
              }
            />

            {/* <PrivateRoute path="/dashboard" element={<DashboardPage />} />
            <PrivateRoute path="/add-ticket" element={<AddTicketsPage />} />
            <PrivateRoute path="/tickets" element={<TicketsListsPage />} />
            <PrivateRoute path="/ticket/:id" element={<TicketPage />} /> */}
            {/* <PrivateRoute path="/dashboard">
              <DashboardPage />
            </PrivateRoute> */}
          </Routes>{' '}
        </Defaultlayout>
      </Router>
    </div>
  );
}

export default App;
