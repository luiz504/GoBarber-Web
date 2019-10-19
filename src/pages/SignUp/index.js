import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <form>
        <input placeholder="Name" />
        <input type="email" placeholder="E-email" />
        <input type="password" placeholder="Password" />

        <button type="submit">Join</button>
        <Link to="/">
          Already on GoBarber? <strong>Sing in</strong>
        </Link>
      </form>
    </>
  );
}
