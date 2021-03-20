import styles from './OuterBanner.module.scss';
import Image from 'next/image';

const OuterBanner = () => {
  return (
      <div className={styles.outer_banner}>
          <div className={styles.caption}>
              <span className={styles.trust_logo}>
                <Image
                    src="/trust_logo.svg"
                    alt="jags clients"
                    width={38}
                    height={36}
                />
              </span>
              <span className={styles.trust_companies}>
                trusted by more than 00 + companies 
              </span>
          </div>
          <div className={styles.slider}>
              <span className={styles.image_holder}></span>
              <span className={styles.image_holder}></span>
              <span className={styles.image_holder}></span>
              <span className={styles.image_holder}></span>
          </div>
      </div>
  )
}

export default OuterBanner;


