import Image from "next/image"
import styles from './SinglePost.module.css'
import PostUser from "@/components/postUser/postUser"
import { Suspense } from "react"
import { getPost } from "@/lib/data"

const getData = async (slug)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`,)
    if(!res.ok){
      throw new Error('Something went wrong')
    }
    return res.json()
  }

const SinglePostPage = async ({params})=>{
    const {slug} = params;
    const post = await getData(slug) 
    // const post = await getPost(slug);
    return(
          <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="https://images.pexels.com/photos/719399/pexels-photo-719399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className={styles.img} fill />
                 
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    <Image src='https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
                    className='object-cover rounded-full'
                    height={10}
                    width={40}
                    
                     />
                     <Suspense  fallback="loading...">
                        <PostUser userId = {post.userId}/>
                    </Suspense>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>published:</span>
                        <span className={styles.detailValue}>20-05-2023</span>
                    </div>
                </div>
                <div className={styles.content}>
                 {  post.body}
                </div>
            </div>
          </div>
    )
}
export default SinglePostPage