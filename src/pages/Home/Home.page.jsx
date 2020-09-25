import React, { useRef } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

import Login from '../../components/Login';

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();

  // function deAuthenticate(event) {
  //   event.preventDefault();
  //   logout();
  //   history.push('/');
  // }

  return (
    <div className="homepage" ref={sectionRef}>
      <h1>Hello `user`</h1>
      {authenticated ? <Redirect to="/dashboard" /> : <Login />}
    </div>
  );
}

export default HomePage;
