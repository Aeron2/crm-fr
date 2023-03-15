import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
function BreadcrumbComp({ page }) {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default BreadcrumbComp;
