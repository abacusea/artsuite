import styles from './ServiceItem.module.scss';
import Image from 'next/image';

const ServiceItem = () => {
  return (
    <div className={styles.service_block}>
        <div className={styles.service_wrap}>
            <div className={styles.service_icon}> 
                <Image 
                    src="/trust_logo.svg"
                    alt="service logo"
                    width={46}
                    height={50}
                />
            </div>
            <div className={styles.title}>

            </div>
            <div className={styles.description}>
                
            </div>
        </div>
    </div>
  )
}

export default ServiceItem;