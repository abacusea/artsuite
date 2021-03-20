import styles from './WhatWeDo.module.scss';
import { Button } from 'reactstrap';

const WhatWeDo = () => {
  return (
      <div className={styles.container}>
        <div className={styles.image_holder}>
        </div>
        <div className={styles.caption}>
            <h2>What We Do ?</h2>
            <p>
            Vertically Integrated Solution taking care of a to z verticals of a business establishment, from scratch from the registering process, legal 
            compliances, planning and execution of digitalization, business automation, branding and marketing, human resource management etc. And helping
            businesses to complete the entire life cycle in an easy and affordable using
            modern technologies and business statics.
            </p>
            <a href="#"><Button className={styles.btn_wrap}>More</Button>{' '}</a>
        </div>
      </div>
  )
}

export default WhatWeDo;