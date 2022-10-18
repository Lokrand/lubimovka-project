import styles from './Header.module.scss';
import logo from '../../images/Logo.svg';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Логотип."/>
      <Navigation/>
    </header>
  );
}

export default Header
