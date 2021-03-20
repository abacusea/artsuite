import styles from './Header.module.scss';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <div className={styles.nav_block}>
            <div className={styles.brand_wrap}>
                <a href="#">
                  <Image
                    src="/jags-brand-logo.svg"
                    alt="Jags Inventions"
                    width={50}
                    height={50}
                  />
                </a>
            </div>
            <div className={styles.nav_wrap}>
              <nav className={styles.nav}>
                <ul className={styles.menu}>
                    <li> <a href="#">Home</a> </li>
                    <li> <a href="#">Services</a> </li>
                    <li> <a href="#">Solutions</a> </li>
                    <li> <a href="#">About Us</a> </li>
                    <li> <a href="#">Our Team</a> </li>
                    <li> <a href="#">Contact Us</a> </li>
                </ul>
              </nav>
            </div>
        </div>
      </div>

    </header>
  )
}

export default Header;


