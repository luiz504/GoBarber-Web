import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Cointainer } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Cointainer>{children}</Cointainer>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
