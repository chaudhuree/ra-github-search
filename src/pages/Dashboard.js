import React from 'react';
import { Info, Navbar, Repos, Search, User } from '../components';
import { useGlobalContext } from '../context/context';
import loadingImage from '../images/preloader.gif';
const Dashboard = () => {
    const { isLoading } = useGlobalContext();
    if (isLoading) {
      return (
        <main>
          <Navbar />
          <Search />
          <img src={loadingImage} className='loading-img' alt='loding' />
        </main>
      );
    }
    return (
      <main>
        <Navbar></Navbar>
        <Search />
        <Info />
        <User />
        <Repos />
      </main>
    );
  };

export default Dashboard;
