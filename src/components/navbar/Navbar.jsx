import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"
const Navbar = ()=>{
    return(
       <div className="border-b border-gray-700">
         <div className=" flex items-center justify-between px-2">
            <div className={styles.logo}>Techmasters</div>
            <div className="flex justify-end items-center">
                <Links/>
            </div>
        </div>
       </div>
    )
}
export default Navbar