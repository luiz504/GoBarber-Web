import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: ${colors.darkOpacityTen};
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: ${colors.baseWhite};
      margin: 0 0 10px;

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

    hr {
      border: 0;
      height: 1px;
      background: ${colors.whiteOpacityTen};
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: ${colors.blue};
      color: ${colors.baseWhite};
      font-size: 16px;
      font-weight: bold;
      border: 0px;
      border-radius: 4px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, colors.blue)};
      }
    }
  }

  > button {
    width: 100%;
    margin: 10px 0 0;
    height: 44px;
    background: ${colors.logoutPink};
    color: ${colors.baseWhite};
    font-size: 16px;
    font-weight: bold;
    border: 0px;
    border-radius: 4px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, colors.logoutPink)};
    }
  }
`;
