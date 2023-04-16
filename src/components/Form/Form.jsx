import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
  };
  return (
    <Container className="my-5">
      <Card className="shadow col-md-6">
        <div className="m-5">
          <h2>Registration</h2>
          <form action="" onSubmit={handleSubmit}>
            <div className="my-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={user.name}
                required
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="my-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={user.email}
                required
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="my-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={user.password}
                required
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="my-2">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Card>
    </Container>
  );
};

export default Form;
