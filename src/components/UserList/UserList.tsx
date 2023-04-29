import React from 'react';
import styles from './user-list.module.scss';
import UserItem from './UserItem/UserItem';
import { User } from '@/store/userSlice';

type UserListProps = {
  users: User[];
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <ul className={styles.userList}>
      {users.map((user) => {
        return (
          <UserItem
            key={user.id}
            avatar={user.avatar}
            name={user.name}
            id={user.id}
            surname={user.surname}
          />
        );
      })}
    </ul>
  );
};
export default UserList;
