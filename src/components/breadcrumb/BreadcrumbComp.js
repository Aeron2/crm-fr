import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Breadcrumb } from 'react-bootstrap';
function BreadcrumbComp({ page }) {
  return (
    <div>
      <Breadcrumb>
        <LinkContainer to="/">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </LinkContainer>

        <Breadcrumb.Item active>{page}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default BreadcrumbComp;
