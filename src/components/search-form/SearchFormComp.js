import React from 'react';
import { useDispatch } from 'react-redux';
import { Col, Form, Row } from 'react-bootstrap';
import { filterSerachTicket } from '../../page/ticket-list/ticketsAction';

function SearchFormComp() {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { value } = e.target;

    dispatch(filterSerachTicket(value));
  };
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            Search :
          </Form.Label>
          <Col sm="9">
            <Form.Control
              name="searchStr"
              onChange={handleOnChange}
              placeholder="Search ... "
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default SearchFormComp;
