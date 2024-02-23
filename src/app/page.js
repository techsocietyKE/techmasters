import Image from 'next/image';
import styles from './home.module.css'

export default function Home() {
 

  return (
   <div className='h-screen my-7 '>
     <div className={styles.body}>
        <div className='flex items-center justify-center h-screen '>
      <div className=''>
        <h1 className='md:text-7xl font-extrabold text-2xl mb-8  mt-4 ml-1   md:my-5 md:mx-5 tracking-wider'>Techmasters</h1>
        <p className='md:mx-8 md:my-8 mt-9 text-xl text-start text-white tracking-wide font-extrabold'>
          Nothing Special here,just doctors engineers Developers Captains Pastors and the list goes
          on and on and on....
        </p>
        <div className='flex gap-8 mx-8 mt-8'>
          <button className='bg-[#11823B] text-white px-8 py-2 rounded-3xl hover:bg-[#004d25] hover:font-extrabold'>The Club</button>
          <button className='bg-[#11823B] text-white px-8 py-2 rounded-3xl hover:bg-[#004d25] hover:font-extrabold'>Contacts</button>
        </div>
          {/* <div className={styles.brands}>
            <Image src='https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='brand' fill className={styles.brand}/>
          </div> */}
      </div>

    </div>
    </div>
   </div>
  );
}
