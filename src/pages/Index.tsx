
import React from 'react';
import Landing from '../components/Landing';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Landing />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
