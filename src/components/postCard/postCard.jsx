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
    <div>
      <div className=''>
        <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-sm bg-clip-border rounded-xl w-full md:w-[400px] md:h-[350px]">
          <div className="relative h-[200px] mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="card-image"
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {truncatedTitle}
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              {truncateText(post.body, 10)} {/* Change 20 to the desired number of words for the body */}
            </p>
          </div>
          <Link href={`/blog/${post.id}`}>
            <div className="p-6 pt-0 flex items-center gap-2">
              <span className="text-slate-900 font-bold">Read More</span>
              <span><FcAdvance className="text-3xl" /></span>
            </div>
          </Link>
          <span className="flex items-center gap-2 text-slate-600  justify-end mx-2">
            <span className="">by:</span>
            <p className="text-sm ">23.06.2023</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
