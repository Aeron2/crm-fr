import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, FormGroup, Button } from 'react-bootstrap';

function ResetPassword({
  handleOnChnage,
  email,
  password,
  handleOnResetSubmit,
  formSwitcher,
}) {
  ResetPassword.propTypes = {
    handleOnChnage: PropTypes.func.isRequired,
    email: PropTypes.func.isRequired,
    password: PropTypes.func.isRequired,
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Reset Password</h1>
          <hr />
          <Form autoComplete="off" onSubmit={() => handleOnResetSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnChnage}
                placeholder="Enter Email"
                required
              />
            </Form.Group>

            <Button type="submit " className="mt-2">
              {' '}
              Reset PassWord
            </Button>
          </Form>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <a href="#!" onClick={() => formSwitcher('login')}>
            Login Now???
          </a>{' '}
        </Col>
      </Row>
    </Container>
  );
}

export default ResetPassword;
