import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllTickets } from './ticketsAction';
import { Container, Row, Col, Button } from 'react-bootstrap';
import BreadcrumbComp from '../../components/breadcrumb/BreadcrumbComp';
import SearchFormComp from '../../components/search-form/SearchFormComp';
import TicketTable from '../../components/ticket-table/TicketTable';
import { Link } from 'react-router-dom';
import tickets from '../../components/ticket-table/dummy-tickets.json';



function TicketsListsPage() {
  const dispatch = useDispatch();

  const [str, setStr] = useState('');
  
  useEffect(() => {
    dispatch(fetchAllTickets());
    // fetchAllTickets();
  }, [str, dispatch]);

  

  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbComp page="Tickets List" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Link to="/add-ticket">
            <Button variant="info"> Add New Tickets</Button>
          </Link>
        </Col>
        <Col className="text-right">
          <SearchFormComp />
        </Col>
      </Row>

      <hr />
      <Row>
        <Col>
          <TicketTable  />
        </Col>
      </Row>
    </Container>
  );
}

export default TicketsListsPage;
