import React from 'react';

import { MdNotifications } from 'react-icons/md';

import colors from '~/styles/colors';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color={colors.purple} size={20} />
      </Badge>

      <NotificationList>
        <Scroll>
          <Notification unread>
            <p>Você possui novo agendamento</p>
            <time>há 2 dias</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification>
            <p>Você possui novo agendamento</p>
            <time>há dois dias</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification>
            <p>Você possui novo agendamento</p>
            <time>há dois dias</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification>
            <p>Você possui novo agendamento</p>
            <time>há dois dias</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification>
            <p>Você possui novo agendamento</p>
            <time>há dois dias</time>
            <button type="button">Mark as read</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
