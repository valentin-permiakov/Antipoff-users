/* eslint-disable react-hooks/exhaustive-deps */
import Header from '@/components/Header/Header';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from './dashboard.module.scss';
import UserList from '@/components/UserList/UserList';
import { useDispatch } from 'react-redux';
import { User, addUser } from '@/store/userSlice';
import { ServerData } from '@/types';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import Head from 'next/head';
import { EIcons, Icon } from '@/components/icons/Icon';

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();
  const usersState = useSelector((state: RootState) => state.users);

  useEffect(() => {
    if (!sessionStorage.getItem('token')) {
      router.push('/');
    }
  }, []);
  const fetchUserData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://random-data-api.com/api/v2/users?size=4'
      );
      const data = await response.json();

      data.forEach((user: ServerData) => {
        const userData: User = {
          id: user.id,
          name: user.first_name,
          surname: user.last_name,
          avatar: user.avatar,
          email: user.email,
          phone: user.phone_number,
          userName: user.username,
        };

        dispatch(addUser(userData));
      });
    } catch (error: any) {
      console.log(error.message);
      setError('Что-то пошло не так');
    }
    setLoading(false);
  };

  useEffect(() => {
    if (usersState.length === 0) fetchUserData();
  }, []);

  return (
    <>
      <Head>
        <title>Antipoff Dashboard</title>
        <meta
          name='description'
          content='A dashboard with user inormation'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
      </Head>
      <Header containerClass='headerStack'>
        <h1 className={styles.header}>Наша команда</h1>
        <p className={styles.text}>
          Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
          ложатся на их плечи, и умеющие находить выход из любых, даже самых
          сложных ситуаций.
        </p>
      </Header>
      <main className={styles.mainContent}>
        <UserList users={usersState} />
        {!loading && (
          <button
            className={styles.loadBtn}
            onClick={fetchUserData}
          >
            Показать ещё <Icon name={EIcons.arrowIcon} />
          </button>
        )}
        {loading && <p className={styles.message}>Загружаем данные...</p>}
        {error && <p className={styles.message}>{error}</p>}
      </main>
    </>
  );
};
export default Dashboard;
