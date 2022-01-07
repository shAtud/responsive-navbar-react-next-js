import { useState } from 'react'
import MenuIcon from './MenuIcon'
import Image from 'next/image';
const Navbar = props =>{
    const [open,setOpen] = useState(false);
    const links = ['home','pages','Blog','about','contact']
    return(
        <nav className='w-[100%] h-[60px] bg-gray-800 fixed  top-0 left-0 text-white flex md:flex-row   flex-col text-xl z-50 justify-center  md:justify-between shadow-lg shadow-black/30'>
            <div className='flex gap-x-4  items-center md:mx-4 md:text-2xl'>
                <MenuIcon 
                    className='w-8 hover:opacity-80 hover:cursor-pointer transition-all md:hidden'
                    onClick = {(e)=>setOpen(!open)}
                    />
            
                <span>Sh_atud</span>
              
            
            </div>
          <ul className ={`absolute md:static md:flex md:w-auto md:h-auto  w-[20%] h-[100vh] bg-gray-800 top-[60px] ${open?'left-0':'left-[-100%]'} left-0 transition-all duration-500 ease-in z-10  pt-5 space-y-5 md:space-y-0 text-xl md:mr-8 md:transition-none rounded-sm`}>
                {
                    links.map((el,index)=>{
                        return(
                            <li className=' hover:cursor-pointer transition-all   hover:bg-white hover:text-gray-900 rounded-l-[30px]  ml-auto w-[90%] pl-4 md:hover:bg-transparent md:hover:text-white  md:hover:scale-105' key={index}>{el}</li>
                        )
                    })
                }
              

            </ul>
        </nav>
    )
}

export default Navbar;