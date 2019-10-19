import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const Container = styled.div`
  background: ${colors.baseWhite};
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid ${colors.contrastWhite};
    }

    a {
      font-weight: bold;
      text-transform: uppercase;
      color: ${colors.purple};
      transition: color 0.2s;

      &:hover {
        color: ${darken(0.03, colors.purple)};
      }
    }
    aside {
      background: #56d;
      display: flex;
      align-items: center;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid ${colors.contrastWhite};

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: ${colors.greyDark};
    }

    a {
      display: block;
      font-size: 12px;
      margin-top: 2px;
      color: ${colors.greyLight};
      transition: color 0.2s;

      &:hover {
        color: ${darken(0.05, colors.greyLight)};
      }
    }
  }

  img {
    height: 32px;
    border-radius: 50%;
  }
`;
