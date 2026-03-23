import React, { useState } from "react";
import { Card } from "react-bootstrap";
import FacebookLogin from "react-facebook-login";
import CheckOut from "./CheckOut";

function LoginForm() {
  return (
    <form className="border mt-3 mb-5 p-3 bg-white">
      <label className="m-2">Name:</label>
      <input type="text" name="name" placeholder="Your name" />
      <label className="m-2">Email:</label>
      <input type="email" name="email" placeholder="Your Email" />
      <input type="submit" value="Login" className="btn bg-success text-white my-3" />
    </form>
  );
}

function SignIn() {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    if (response.picture) {
      setPicture(response.picture.data.url);
    }
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }

  return (
    <div className="container mt-3">
      <Card style={{ width: '800px' }} className="mx-auto mt-5">
        {!login &&
          <React.Fragment>
            <Card.Header className="pb-4">
              <h1>Sign In</h1>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <h3>Please login using one of the following:</h3>
                <LoginForm />
                <FacebookLogin
                  appId="706356645837330"
                  autoLoad={false}
                  fields="name,email,picture"
                  scope="public_profile,user_friends"
                  callback={responseFacebook}
                  icon="fa-facebook"
                />
              </Card.Text>
            </Card.Body>
          </React.Fragment>
        }
        {login &&
          <CheckOut fbpic={picture} fbdata={data} />
        }
      </Card>
    </div>
  );
}

export default SignIn;
