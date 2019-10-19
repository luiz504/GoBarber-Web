import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { lighten } from 'polished';
import colors from '~/styles/colors';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        background: ${colors.orangeNotif};
        top: 0;
        right: 0;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        content: '';
      }
    `}
`;
export const NotificationList = styled.div`
  position: absolute;
  width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 30px);
  background: ${colors.darkOpacitysixty};
  border-radius: 4px;
  padding: 15px 5px;

  &::before {
    content: '';
    position: absolute;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid ${colors.darkOpacitysixty};
    left: calc(50% - 20px);
    top: -20px;
    width: 0px;
    height: 0px;
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
  background: ${colors.darkOpacityTen};
`;

export const Notification = styled.div`
  color: ${colors.baseWhite};

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid ${colors.whiteOpacityTen};
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    font-size: 12px;
    opacity: 0.6;
  }

  button {
    font-size: 12px;
    border: 0;
    background: none;
    color: ${lighten(0.2, colors.purple)};
    padding: 0 5px;
    margin: 0 5px;
    border-left: 1px solid ${colors.whiteOpacityTen};
  }

  ${props =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background: ${colors.orangeNotif};
        border-radius: 50%;
      }
    `}
`;
