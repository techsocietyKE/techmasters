import Image from "next/image"
import styles from './about.module.css'
const AboutPage = ()=>{
    return(
        <div>
          <div className={styles.imageContainer}>
            <Image src='https://cdn.midjourney.com/e8d6ebad-de45-48cb-9d1d-d71d60e919bd/0_3.webp' alt="img" width={500} height={500}/>
          </div>
        </div>
    )
}
export default AboutPage