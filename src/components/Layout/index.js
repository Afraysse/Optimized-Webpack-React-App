import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Header,
  Container,
  Grid,
  Divider,
  Segment,
  Icon,
  Menu,
  Dropdown
} from "semantic-ui-react";

import { pullRight, h1 } from "./layout.css";

// const Header = () => {
//   return (
//     <Segment>
//       <Grid>
//         <Grid.Row>
//           <Link to="/">
//             <Header as="h3" className={h1}>
//               Annie Fraysse
//             </Header>
//           </Link>
//         </Grid.Row>
//       </Grid>
//     </Segment>
//   );
// };
//
// export default Header;

const NavBar = () => {
  return (
    <Menu attched="top" inverted borderless style={{ height: "5em" }}>
      <Menu.Menu position="left">
        <Menu.Item>What up</Menu.Item>
        <Menu.Item>Hi </Menu.Item>
      </Menu.Menu>
      <Menu.Menu position="right">
        <Menu.Item>
          <Dropdown text="Options" style={{ paddingRight: "2em" }}>
            <Dropdown.Menu>
              <Dropdown.Item>Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Container text style={{ marginTop: "2em" }} />
      <NavBar />
      <Container style={{ width: "100%", marginTop: "2em" }}>
        {children}
        <Divider />
        <p style={{ textAlign: "right" }}>
          Made with <Icon name="heart" color="red" /> By Annie Fraysse
        </p>
      </Container>
    </Fragment>
  );
};

export default Layout;
