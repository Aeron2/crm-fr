import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import TicketTable from '../../components/ticket-table/TicketTable';
import tickets from '../../components/ticket-table/dummy-tickets.json';

function DashboardPage() {
  return (
    <Container>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button
            variant="info"
            style={{ fontSize: '2rem', padding: '10px 30px ' }}
          >
            Add New Ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <div>Total Tickets : 50</div>
          <div>Pending Tickets : 50</div>
        </Col>
      </Row>
      <Row>
        <Col className=" mb-2">Recently Added Tickets</Col>
      </Row>
      <hr />
      <Row>
        <Col className="recent-ticket ">
          {' '}
          <TicketTable tickets={tickets} />{' '}
        </Col>
      </Row>
    </Container>
  );
}

export default DashboardPage;
