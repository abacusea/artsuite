import styles from './InnerBanner.module.scss';
import { Button } from 'reactstrap';
import Image from 'next/image';

const InnerBanner = () => {
  return (
    <div className={styles.hero_banner}>
        <div className={styles.hero_content}>
            <h3>
                <span>We provide</span>
                <span>vertically integrated Solutions</span>
                <span>taking care of a-z verticals</span>
                <span>of a business development.</span>
            </h3>
            <a href="#"><Button className={styles.btn_wrap}>Services</Button>{' '}</a>
            <div className={styles.social_media}>
              <div className={styles.icons}>
                <a href="#">
                  <Image
                    src="/twitter.svg"
                    alt="twitter"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
              <div className={styles.icons}>
                <a href="#">
                  <Image
                    src="/facebook.svg"
                    alt="facebook"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
              <div className={styles.icons}>
                <a href="#">
                  <Image
                    src="/linkedin.svg"
                    alt="linkedin"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
            </div>
        </div>	
        <div className={styles.hero_image}>
        </div>
    </div>
  )
}

export default InnerBanner;


