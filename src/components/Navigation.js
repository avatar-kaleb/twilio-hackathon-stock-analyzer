import {
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from '@blueprintjs/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Navigation = () => {
  let history = useHistory();

  return (
    <Navbar fixedToTop>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>Blueprint</NavbarHeading>
        <NavbarDivider />
        <Button
          className={Classes.MINIMAL}
          icon="home"
          text="Home"
          onClick={() => history.push('/')}
        />
        <Button
          className={Classes.MINIMAL}
          icon="info-sign"
          text="About"
          onClick={() => history.push('/about')}
        />
        <Button
          className={Classes.MINIMAL}
          icon="exchange"
          text="Analyer"
          onClick={() => history.push('/stock-analyzer')}
        />
      </NavbarGroup>
    </Navbar>
  );
};

export default Navigation;
