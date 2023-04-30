import React from 'react';
import styles from './header.module.scss';
import { useRouter } from 'next/router';
import { EIcons, Icon } from '../icons/Icon';

type HeaderProps = {
  children: React.ReactNode;
  backURL?: boolean;
  containerClass: string;
  headerClass?: string;
};

const Header: React.FC<HeaderProps> = ({
  children,
  backURL,
  containerClass,
  headerClass = 'header',
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
    <header className={`${styles.header} ${styles[headerClass]}`}>
      <div className={`${styles.btnContainer} ${!backURL && styles.noBack}`}>
        {backURL && (
          <button
            className={styles.headerBtn}
            onClick={handleBack}
          >
            <span className={styles.btnText}>Назад</span>
            <span className={styles.btnIcon}>
              <Icon
                name={EIcons.backIcon}
                width={7}
                height={15}
              />
            </span>
          </button>
        )}
        <button
          className={styles.headerBtn}
          onClick={handleLogout}
        >
          <span className={styles.btnText}>Выход</span>
          <span className={styles.btnIcon}>
            <Icon
              name={EIcons.exitIcon}
              width={18}
              height={18}
            />
          </span>
        </button>
      </div>
      <div className={styles[containerClass]}>{children}</div>
    </header>
  );
};
export default Header;
