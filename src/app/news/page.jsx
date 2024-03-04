import Image from "next/image"
import { FcAdvance } from "react-icons/fc";
const News = ()=>{
    return(
       <div className="mt-20">

        <div class="relative flex flex-col mt-20 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full md:w-96">
  <div
    class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <Image
      src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
      alt="card-image" />
  </div>
  <div class="p-6">
    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      UI/UX Review Check
    </h5>
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      The place is close to Barceloneta Beach and bus stop just 2 min by walk
      and near to "Naviglio" where you can enjoy the main night life in
      Barcelona.
    </p>
   
  </div>
  <div class="p-6 pt-0 flex items-center gap-2">
  <span className="text-slate-900 font-bold">Read More</span>
   <span><FcAdvance className="text-3xl"/></span>
  </div>
  <span className="flex items-center gap-2 text-slate-600  justify-end mx-2">
    <span className="">by:</span>
    <p className=" text-sm ">23.06.2023</p>
    </span>
</div>  

       </div>
    )
}
export default News