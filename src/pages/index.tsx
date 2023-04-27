import LoginForm from '@/components/LoginForm/LoginForm';
import Head from 'next/head';
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Antipoff Users</title>
        <meta
          name='description'
          content='A dashboard with user inormation'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
      </Head>
      <main className={styles.homeMain}>
        <LoginForm />
      </main>
    </>
  );
}
