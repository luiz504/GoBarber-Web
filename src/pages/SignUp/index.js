import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Form } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

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
  function handleSubmit(data) {
    console.tron.log(data);
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
          Already on GoBarber? <strong>Sing in</strong>
        </Link>
      </Form>
    </>
  );
}
