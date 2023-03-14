import React from 'react';
import Footer from './partials/Footer';
import Header from './partials/Header';

function Defaultlayout({childern}) {
  return (
    <div>
      <div className="default-layout">
        <div className="header">
          <Header />
        </div>
        <main className="main">{childern}</main>
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Defaultlayout;