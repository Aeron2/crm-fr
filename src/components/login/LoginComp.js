import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, FormGroup, Button } from 'react-bootstrap';

function LoginComp({
  handleOnChnage,
  email,
  password,
  handleSubmit,
  formSwitcher,
}) {
  LoginComp.propTypes = {
    handleOnChnage: PropTypes.func.isRequired,
    email: PropTypes.func.isRequired,
    password: PropTypes.func.isRequired,
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Client Login</h1>
          <hr />
          <Form autoComplete="off" onSubmit={() => handleSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={ handleOnChnage}
                placeholder="Enter Email"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={ handleOnChnage}
                value={password}
                placeholder="Password"
                required
              />
            </Form.Group>
            <Button type="submit " className="mt-2">
              {' '}
              Login
            </Button>
          </Form>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <a href="#!" onClick={() => formSwitcher('reset')}>
            Forgot Password
          </a>{' '}
        </Col>
      </Row>
    </Container>
  );
}

export default LoginComp;
