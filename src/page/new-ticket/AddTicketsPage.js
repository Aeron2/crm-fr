import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AddTicketFormComp from '../../components/add-ticket-form/AddTicketFormComp';
import BreadcrumbComp from '../../components/breadcrumb/BreadcrumbComp';
import { shortText } from './../../utils/validation';

const initialFrmDt = {
  subject: '',
  issueDate: '',
  details: '',
};
const initialFrmErr = {
  subject: false,
  issueDate: false,
  details: false,
};

function AddTicketsPage() {
  const [frmData, setFrmData] = useState(initialFrmDt);
  const [frmDataErr, setFrmDataErr] = useState(initialFrmErr);
  useEffect(() => {}, [frmData]);
  useEffect(() => {}, [frmDataErr]);

  const handleOnChnage = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setFrmData({
      ...frmData,
      [name]: value,
    });
    // console.log(frmData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFrmDataErr(initialFrmErr);
    const isSubjectValid = shortText(frmData.subject);
    !isSubjectValid &&
      setFrmDataErr({
        ...initialFrmErr,
        subject: !isSubjectValid,
      });
    console.log(frmData);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <BreadcrumbComp page="New Ticket" />
          </Col>
        </Row>
        <Row>
          <Col>
            <AddTicketFormComp
              handleOnChnage={handleOnChnage}
              frmData={frmData}
              handleSubmit={handleSubmit}
              frmDataErr={frmDataErr}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AddTicketsPage;
