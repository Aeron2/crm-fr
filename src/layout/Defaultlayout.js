import React from 'react';
import Footer from './partials/Footer';
import Header from './partials/Header';

function Defaultlayout({ children }) {
  return (
    <div>
      <div className="default-layout">
        <div className="header">
          <Header />
        </div>
        <main className="main">{children}</main>
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Defaultlayout;
