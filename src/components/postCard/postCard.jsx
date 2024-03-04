import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'
import { FcAdvance } from "react-icons/fc";

const PostCard = ({ post }) => {
  const truncateText = (text, maxWords) => {
    const words = text.split(' ');
    const truncatedWords = words.slice(0, maxWords);
    const truncatedText = truncatedWords.join(' ');

    if (words.length > maxWords) {
      return `${truncatedText} ...`;
    } else {
      return truncatedText;
    }
  };

  const truncatedTitle = truncateText(post.title, 4); // Truncate title to 4 words
  
  return (
    <div className=''>
       <Link href={`/blog/${post.id}`}>
       <div className='w-[750px] md:ml-5 rounded-[15px] bg-white h-[230px] shadow-lg shadow-gray-300 my-4 mb-9 p-6 flex items-center justify-between '>

         <div className='flex justify-start'>
         <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="card-image"
              className='h-32 rounded-md w-56 shadow-lg'
            />
         </div>
         <div className='md:w-96'>
           <h1 className='text-2xl text-slate-950 font-bold tracking-wider text-start my-3 '>{truncatedTitle}</h1>
           <h1 className='text-xl text-slate-700 font-semibold tracking-wider text-start my-3 '> {truncateText(post.body, 5)}</h1>
    
         
           <span className='flex bottom-0 justify-between items-center mt-6'>
            <h2 className='text-gray-500'>kevin de bruyne</h2>
            <h2 className='text-gray-500'>23.01.2023</h2>
           </span>
         </div>
       </div>
       </Link>
    </div>
  );
};

export default PostCard;
