/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React from 'react';
import styles from './user-item.module.scss';

type UserItemProps = {
  name: string;
  surname: string;
  avatar: string;
  id: number;
};

const UserItem: React.FC<UserItemProps> = ({ id, name, surname, avatar }) => {
  const router = useRouter();
  return (
    <li
      className={styles.userItem}
      onClick={() => router.push(`/users/${id}`)}
    >
      <img
        src={avatar}
        alt='user avatar'
        className={styles.avatar}
      />
      <span className={styles.userName}>{`${name} ${surname}`}</span>
    </li>
  );
};
export default UserItem;
