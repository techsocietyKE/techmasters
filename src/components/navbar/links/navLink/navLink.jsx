"use client"
import Link from "next/link"
import styles from "./navLink.module.css"
import { usePathname } from "next/navigation"
const NavLink = ({item})=>{
    const pathname = usePathname()
    return(
      <Link href={item.path} className={`${styles.container} ${pathname === item.title && styles.active}`}
      key={item.title}>{item.title}</Link>
    )
}
export default NavLink