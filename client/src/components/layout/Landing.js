import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='landing-inner'>
        <h1 className='x-large'>IGnite Mood Tracker Admin Panel</h1>
        <p className='lead'>Manege the mood tracker app data</p>
        <div className='buttons'>
          <Link to='/login' className='btn btn-light'>
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
