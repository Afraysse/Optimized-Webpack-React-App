import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Header,
  Container,
  Grid,
  Divider,
  Segment,
  Icon
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

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Container style={{ width: "100%" }}>
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
