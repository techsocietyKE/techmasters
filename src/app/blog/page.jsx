import PostCard from '@/components/postCard/postCard'
import styles from './blog.module.css'
import { getPosts } from '@/lib/data'
import Slider from '@/components/blogSlider/Slider'

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
      <div>
        {/* <Slider/> */}
          <div className='my-16 md:flex block gap-4 '>
      <div className='w-[800px]'>
         {posts.map((post)=>(
         <div className={styles.post} key={post.id}>
         <PostCard post={post}/>
         </div>
       ))} </div>
            <div className='border h-screen block md:justify-end items-center md:p-6 md:m-2 m-3 p-3  shadow-md rounded-md z-50 md:w-[500px]'>
              <h1 className='text-xl text-center md:text-2xl mb-4 font-extrabold tracking-widest '>This is what has been trending</h1>
               <div>
                <div class="relative grid h-[10rem] w-full max-w-[28rem] flex-col my-3 items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                 <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">  
                   <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                 </div>
                 <div class="absolute p-6 px-6 py-14 md:px-12 cursor-pointer">
                  <h2 class="mb-6 bottom-0 block font-sans text-3xl items-start   font-medium leading-[1.5] tracking-normal text-white antialiased">Revolution of AI in Technological Advancement </h2>                  
                 </div>
                </div>  
               </div>
               <div>
                <div class="relative grid h-[10rem] w-full max-w-[28rem] flex-col my-3 items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                 <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">  
                   <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                 </div>
                 <div class="absolute p-6 px-6 py-14 md:px-12 cursor-pointer">
                  <h2 class="mb-6 bottom-0 block font-sans text-3xl items-start   font-medium leading-[1.5] tracking-normal text-white antialiased">Revolution of AI in Technological Advancement </h2>                  
                 </div>
                </div>  
               </div>
               <div>
                <div class="relative grid h-[10rem] w-full max-w-[28rem] flex-col my-3 items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                 <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">  
                   <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                 </div>
                 <div class="absolute p-6 px-6 py-14 md:px-12 cursor-pointer">
                  <h2 class="mb-6 bottom-0 block font-sans text-3xl items-start   font-medium leading-[1.5] tracking-normal text-white antialiased">Revolution of AI in Technological Advancement </h2>                  
                 </div>
                </div>  
               </div>
            </div> 
 </div>
      </div>
      
    )
}
export default BlogPage