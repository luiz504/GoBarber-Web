import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Input, Form } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is Required'),
  email: Yup.string()
    .email('Insert a valid e-mail')
    .required('E-mail is required'),
  password: Yup.string()
    .min(6, 'Password must be 6 characters or more')
    .required('Password is required'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Name" />
        <Input name="email" type="email" placeholder="E-email" />
        <Input name="password" type="password" placeholder="Password" />

        <button type="submit">Join</button>

        <Link to="/">
          Already on GoBarber? <strong>Sign in</strong>
        </Link>
      </Form>
    </>
  );
}
