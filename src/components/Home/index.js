import React from "react";
import { Link } from "react-router-dom";

import { Grid, Card, Segment, Header } from "semantic-ui-react";

import Layout from "../Layout";

const Home = () => {
  return (
    <Layout>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Card style={{ marginLeft: "2em" }}>
              <Card.Content>
                <Card.Header>Anne Fraysse</Card.Header>
                <Card.Meta>Pokemon Master</Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={12}>
            <Segment style={{ marginLeft: "1em", marginRight: "2em" }}>
              <Header as="h2">Hi</Header>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

export default Home;
