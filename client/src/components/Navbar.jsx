import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'


function Navbar() {
 const [navbar, setNavbar] = useState("bg-primary");
 const [navtext, setNavText] = useState("text-secondary")

 const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavbar("bg-secondary") : setNavbar("bg-primary");
    window.scrollY > 10 ? setNavText("text-primary") : setNavText("text-secondary");
  };



  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  });
  return (
    <div>
        <div className={`fixed flex items-center justify-end h-[80px] w-full transition ease-in-out delay-200 ${navtext} ${navbar}`}>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <ul className='hidden md:flex'>
                    <li className='px-3 text-lg'><Link to={'/'}>About</Link></li>
                    <li className=' px-3 text-lg'><Link to={'/'}>Listing</Link></li>
                    <li className=' px-3 text-lg'><Link to={'/'}>Contacts</Link></li>
                </ul>
            </div>
        </div>


    </div>
  )
}

export default Navbar