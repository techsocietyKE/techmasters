import Link from "next/link"
import styles from './links.module.css'
const Links =()=>{
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
    return(
        <div className={styles.links}>
            {links.map((link=>(
                <Link href={link.path} key={link.title}>
                    {link.title}
                </Link>
            )))}
        </div>
    )
}
export default Links