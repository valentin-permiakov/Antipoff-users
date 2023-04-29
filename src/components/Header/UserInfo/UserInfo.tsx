/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './user-info.module.scss';

type UserInfoProps = {
  avatar: string;
  name: string;
  nickname: string;
};

const UserInfo: React.FC<UserInfoProps> = ({ avatar, name, nickname }) => {
  return (
    <>
      <img
        src={avatar}
        alt='user avatar'
        className={styles.userImage}
      />
      <div className={styles.nameContainer}>
        <h2 className={styles.userName}>{name}</h2>
        <span className={styles.userNickname}>{nickname}</span>
      </div>
    </>
  );
};
export default UserInfo;
