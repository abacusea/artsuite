import styles from './Home.module.scss';
import Slider from './slider';

const Home = () => {
  return (
    <section className={styles.hero_banner}>
      <div className={styles.bg_img}>
        <img src="/banner_circle.png" />
      </div>
      {/* <Slider /> */}
      <div className={styles.slider}>
        <div className={styles.img_wrap}>
            <img src="/single_slider.png" />   
          </div>
        {/* <div className={styles.img_wrap}> 
          <img src="/slide_1.png" /> 
        </div>
        <div className={styles.img_wrap}>
          <img src="/slide_2.png" />   
        </div>
        <div className={styles.img_wrap}>  
          <img src="/slide_3.png" /> 
        </div>
        <div className={styles.img_wrap}> 
         <img src="/slide_4.png" />  
        </div>
        <div className={styles.img_wrap}>  
         <img src="/slide_5.png" /> 
        </div>
        <div className={styles.img_wrap}> 
          <img src="/slide_6.png" />   
        </div>
        <div className={styles.img_wrap}> 
         <img src="/slide_7.png" />   
        </div>
        <div className={styles.img_wrap}>  
          <img src="/slide_8.png" />  
        </div>
        <div className={styles.img_wrap}>
          <img src="/slide_9.png" />    
        </div>
        <div className={styles.img_wrap}>  
          <img src="/slide_10.png" />  
        </div> */}
      </div>
    </section>
  )
}

export default Home;



