import React from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import InfoBlock from '../components/InfoBlock/InfoBlock';
import Footer from '../components/footer/Footer';

class Home extends React.Component {
  render() {
    return (
      <div
        style={{position: "realtive", zIndex: -1}}
      >
        {/* <Header /> */}
        <Banner />
        <InfoBlock />
        <Footer />
      </div>
    );
  }
}

export default Home;