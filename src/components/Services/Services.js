import styles from './Services.module.scss';
import Image from 'next/image';
import ServiceItem from './ServiceItem';

const Services = () => {
  return (
      <div className={styles.services}>
        <div className={styles.caption}>
          <div className={styles.right_Grey}>Let’s Check Our</div>
          <div className={styles.right_Glass}>
            <Image
                src="/Services.svg"
                alt="jags services"
                width={460}
                height={140}
            />
          </div>
          <ServiceItem />
        </div>
      </div>
  )
}

export default Services;


