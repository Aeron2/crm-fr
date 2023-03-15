import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import BreadcrumbComp from '../../components/breadcrumb/BreadcrumbComp';
import MessageHistoryComp from '../../components/message-history/MessageHistoryComp';
import tickets from '../../components/ticket-table/dummy-tickets.json';
import UpdateTicket from '../../components/update-ticket/UpdateTicket';
const ticket = tickets[0];

function TicketPage() {
  const [message, setMessage] = useState('');

  useEffect(() => {}, [message]);
  const handleOnChange = (e) => {
    setMessage(e.target.value);
    //   console.log(message)
  };
  const handleOnSubmit = () => {
    alert('Form submitted');
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbComp page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col className="text-weight-bolder text-secondary">
          <div className="subject">Subject : {ticket.subject}</div>
          <div className="date">AddedAt : {ticket.addedAt}</div>
          <div className="status">Status : {ticket.status} </div>{' '}
        </Col>{' '}
        <Col className="text-right ">
          {' '}
          <Button variant="outline-info">Close Ticket</Button>{' '}
        </Col>{' '}
      </Row>{' '}
      <Row className="mt-4">
        {' '}
        <Col>
          {' '}
          <MessageHistoryComp msg={ticket.history} />{' '}
        </Col>{' '}
      </Row>{' '}
      <hr />{' '}
      <Row className="mt-4">
        <Col>
          <UpdateTicket
            msg={message}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default TicketPage;
