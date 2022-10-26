import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
//import { UserContext } from '../UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  //data que esta em userContext
  //const { data } = React.useContext(UserContext);
  const { data } = useSelector((state) => state.user);
  console.log(data);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to='/'>
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to='/conta'>
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to='/login'>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
