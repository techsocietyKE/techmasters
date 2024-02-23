import { getUser } from '@/lib/data'
import styles from './postUser.module.css'


const getData = async (userId)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache:'no-store'})
    if(!res.ok){
      throw new Error('Something went wrong')
    }
    return res.json()
  }

const PostUser = async ({userId}) =>{
    const user = await getData(userId);
    // const user = getUser(userId)
    // console.log("user: ", user)
    return(
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Author:</span>
          <span className={styles.username}>{user.username}</span>
        </div>
    )
}
export default PostUser