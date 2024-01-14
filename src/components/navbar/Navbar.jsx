import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"
import Image from "next/image"
const Navbar = ()=>{
    return(
       <div className="border-b py-2 border-gray-700">
         <div className=" flex items-center justify-between px-2">

          <div className="flex items-center gap-2">
            <div><Image src='/logo.PNG' width={30} height={30}/></div>
          <div className={styles.logo}>Techmasters</div>
          </div>
            
            <div className="flex justify-end items-center">
                <Links/>
            </div>
        </div>
       </div>
    )
}
export default Navbar