import React from 'react';
import Heading from '../layout/Heading';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup
    .string()
    .min(4, "Password must be at least 4 characters")

});


function Login() {
  const { register, handleSubmit, errors } = useForm({
      validationSchema: schema
  });

  function onSubmit(data) {
    console.log("data", data);
  }

  return (
    <>
    <Heading title="Login" />

    <Form onSubmit={handleSubmit(onSubmit)}>

      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control name="username" placeholder="Username" ref={register({ required: true })} />
        {errors.username && <p>{errors.username.message}</p>}
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" placeholder="Password" ref={register({ required: true })} />
        {errors.password && <p>{errors.password.message}</p>}
      </Form.Group>

      <Button type="submit">Login</Button>
    </Form>
    </>
  );
}

export default Login;