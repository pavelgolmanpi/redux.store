import React, { Component } from 'react';
import LeftSidebar from '../components/LeftSidebar';
import MainStats   from '../components/MainStats';

class MainPage extends Component {
  render() {
    return (
      <div>
        <LeftSidebar />
        <MainStats />
      </div>
    );
  }
}


export default MainPage;
