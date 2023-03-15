import React from 'react';
import { Form, Button } from 'react-bootstrap';
function UpdateTicket({ msg, handleOnChange, handleOnSubmit }) {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label>Reply</Form.Label>
      <Form.Text>
        Please Reply Your message here or Update your Ticket
      </Form.Text>
      <Form.Control
        as="textarea"
        row="5"
        name=""
        value={msg}
        onChange={handleOnChange}
      />
      <div className="text-right mt-4 mb-3">
        <Button variant="info" type="submit">
          {' '}
          Reply
        </Button>
      </div>
    </Form>
  );
}

export default UpdateTicket;
