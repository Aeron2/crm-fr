import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
function AddTicketFormComp({
  handleSubmit,
  handleOnChnage,
  frmData,
  frmDataErr,
}) {
  return (
    <div className="jumbotron mt-4 add-new-ticket">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />

      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              onChange={handleOnChnage}
              value={frmData.subject}
              minLength="6"
              placeholder="Subject"
              required
            />{' '}
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mt-2">
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              onChange={handleOnChnage}
              value={frmData.issueDate}
              required
            />

            {/* <Form.Text className='text-danger'>
              {frmDataErr.subject && 'Subject is Required'}
            </Form.Text> */}
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            // type="date"
            name="details"
            onChange={handleOnChnage}
            value={frmData.details}
            required
          />
        </Form.Group>
        <Button
          type="submit "
          block
          variant="info"
          className="mt-4"
          // onClick={() => handleSubmit}
        >
          {' '}
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddTicketFormComp;
