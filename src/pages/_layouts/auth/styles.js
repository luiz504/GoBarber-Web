import styled from 'styled-components';
import { darken } from 'polished';

import colors from '~/styles/colors';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, ${colors.purple}, ${colors.pink});
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Cointainer = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: ${colors.darkOpacityTen};
      border: 0;
      border-radius: 4px;
      height: 44px;
      margin-bottom: 5px;
      padding: 0 15px;
      margin: 0 0 15px;
      color: ${colors.baseWhite};

      &::placeholder {
        color: ${colors.whiteOpacitySeventy};
      }
    }

    span {
      color: ${colors.errorRed};
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: ${colors.blue};
      border: 1px solid ${colors.darkOpacityTen};
      border-radius: 4px;
      font-size: 16px;
      font-weight: bold;
      color: ${colors.baseWhite};
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, colors.blue)};
      }
    }

    a {
      color: ${colors.baseWhite};
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
