
import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'
const   PostCard = ({post}) => {
  return (
    <div>
      
       <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imageContainer}>
                <Image src='https://images.pexels.com/photos/920381/pexels-photo-920381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' fill className={styles.img}/>
            </div>
            <span className={styles.date}>01.01.2024</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.body}</p>
            <Link href={`/blog/${post.id}`}>Read More</Link>
        </div>
    </div>
  
    </div>
   
  )
}

export default  PostCard