import Header from '@/components/Header/Header';
import UserInfo from '@/components/Header/UserInfo/UserInfo';
import { RootState } from '@/store/store';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './user-page.module.scss';
import User from '@/components/User/User';

const UserPage: React.FC = () => {
  const router = useRouter();
  const usersData = useSelector((state: RootState) => state.users);
  const user = usersData.find((user) => user.id === Number(router.query.id));

  if (user) {
    return (
      <>
        <Head>
          <title>
            Antipoff | {user.name} {user.surname}
          </title>
          <meta
            name='description'
            content='A dashboard with user inormation'
          />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1'
          />
        </Head>
        <Header
          containerClass='headerFlex'
          backURL
          headerClass='flexStart'
        >
          <UserInfo
            avatar={user.avatar}
            name={`${user.name} ${user.surname}`}
            nickname={user.userName}
          />
        </Header>
        <main className={styles.mainContent}>
          <User
            email={user.email}
            phone={user.phone}
          />
        </main>
      </>
    );
  }

  return <div>User Not found</div>;
};
export default UserPage;
