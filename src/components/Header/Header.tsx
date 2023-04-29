import React from 'react';
import styles from './header.module.scss';
import { useRouter } from 'next/router';

type HeaderProps = {
  children: React.ReactNode;
  backURL?: boolean;
  containerClass: string;
};

const Header: React.FC<HeaderProps> = ({
  children,
  backURL,
  containerClass,
}) => {
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.clear();
    router.push('/');
  };

  const handleBack = () => {
    router.back();
  };
  return (
    <header className={`${styles.header} ${styles[containerClass]}`}>
      <div className={`${styles.btnContainer} ${!backURL && styles.noBack}`}>
        {backURL && (
          <button
            className={styles.headerBtn}
            onClick={handleBack}
          >
            Назад
          </button>
        )}
        <button
          className={styles.headerBtn}
          onClick={handleLogout}
        >
          Выход
        </button>
      </div>
      <div className={styles[containerClass]}>{children}</div>
    </header>
  );
};
export default Header;
