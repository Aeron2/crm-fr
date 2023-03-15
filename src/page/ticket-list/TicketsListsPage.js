import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import BreadcrumbComp from '../../components/breadcrumb/BreadcrumbComp';
import SearchFormComp from '../../components/search-form/SearchFormComp';
import TicketTable from '../../components/ticket-table/TicketTable';
import tickets from '../../components/ticket-table/dummy-tickets.json';
function TicketsListsPage() {
  const [str, setStr] = useState('');
  const [displayTicket, setDisplayTicket] = useState(tickets);
  const handleOnChange = (e) => {
    const value = e.target.value;
    setStr(e.target.value);
    searchTicket(value);
  };
  useEffect(() => {}, [str, displayTicket]);

  const searchTicket = (sttr) => {
    const displayTickets = tickets.filter((row) =>
      row.subject.toLowerCase().includes(sttr.toLowerCase())
    );

    setDisplayTicket(displayTickets);
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbComp page="Tickets List" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button variant="info"> Add New Tickets</Button>
        </Col>
        <Col className="text-right">
          <SearchFormComp handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>

      <hr />
      <Row>
        <Col>
          <TicketTable tickets={displayTicket} />
        </Col>
      </Row>
    </Container>
  );
}

export default TicketsListsPage;
