import PostCard from '@/components/postCard/postCard'
import styles from './blog.module.css'
import { getPosts } from '@/lib/data'

const getData = async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts',{cache: 'no-store'})
  if(!res.ok){
    throw new Error('Something went wrong')
  }
  return res.json()
}

const BlogPage = async ()=>{
  const posts = await getData();

  // const posts = await getPosts()
    return(
        <div className='my-16 grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
       {posts.map((post)=>(
         <div className={styles.post} key={post.id}>
         <PostCard post={post}/>
         </div>
       ))
        
       } 
        </div>
    )
}
export default BlogPage