import React from "react";
import { Link } from "react-router-dom";
import { Segment, Grid, Header, Button, Form } from "semantic-ui-react";

const LoginPage = () => {
  return (
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              PokeDex
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Keep track of your Pokemon in one place.
            </p>
            <p style={{ fontSize: "1.33em", fontWeight: "bold" }}>
              Catch em all, <i>all the time</i>!
            </p>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment>
              <Form>
                <Header as="h4" style={{ textAlign: "center" }}>
                  PokeDex Login
                </Header>
                <p style={{ textAlign: "center" }}>
                  Need to Sign up? <a>Click here to join!</a>
                </p>
                <Form.Field>
                  <label>Email</label>
                  <input placeholder="useremail@gmail.com" />
                </Form.Field>
                <Form.Field type="password">
                  <label>Password</label>
                  <input placeholder="************" />
                </Form.Field>
                <Button size="tiny">Login</Button>
                <p style={{ fontSize: "10px" }}>
                  <a>Forget your password or username?</a>
                </p>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default LoginPage;
