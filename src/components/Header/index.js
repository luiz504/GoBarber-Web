import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/logo-purple.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gobarber" />
          <Link to="/dasboard">Dashboad</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>Luiz504</strong>
              <Link to="/profile">My Profile</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Luiz504"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
