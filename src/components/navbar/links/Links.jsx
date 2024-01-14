"use client"
import { useState } from 'react'
import styles from './links.module.css'
import NavLink from "./navLink/navLink"
import Image from 'next/image'
const links =[
    {
        title:"Homepage",
        path:'/'
    },
    {
        title:"About",
        path:'/about'
    },
    {
        title:"Masters",
        path:'/masters'
    },
    {
        title:"Blog",
        path:'/blog'
    },
    {
        title:"News",
        path:'/news'
    },
    {
        title:"Contact",
        path:'/contact'
    },
   
]
const Links =()=>{

    const [open, setOpen] = useState(false)
    const session = true
    const isAdmin = true
    return(
        <div className={styles.container}>
        <div className={styles.links}>
            {links.map((link=>(
               <NavLink item={link} key={link.title}/>
            )))}
            {
                    session?(
                      <>
                       {isAdmin && <NavLink item={{title:'Admin',path:'/admin'}}/>} 
                         <button className={styles.logout}>Logout</button>
                      </>
                ):(
                    <NavLink item={{title:'Be a master', path:'/Login'}}/>
                )
            }
        </div>
        <button className={styles.menuButton} onClick={()=>setOpen((prev)=>!prev)}>
            <Image className='bg-white font-bold' src="/menu.PNG" width={20} height={10} />
        </button>
        {
            open && <div className={styles.mobilelinks}>
                {links.map((link)=>(
                      <NavLink item={link} key={link.title}/>
                ))}
                </div>
        }
        </div>
    )
}
export default Links