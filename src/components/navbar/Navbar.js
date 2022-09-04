import { useState } from "react";
import { FiDribbble, FiInstagram, FiMenu, FiSlack, FiTwitter, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Navbar({ fixed }) {
  const [open,setOpen]=useState(false);
  return (
    <div className="container mx-auto">
        <div className="md:flex items-center background py-4 md:px-0 px-7">
            <div>
                <h3 className="w-12 h-12 bg-red-400 text-white rounded-full text-xl font-semibold flex items-center justify-center">D</h3>
            </div>
            <button onClick={() => setOpen(!open)} className="absolute right-10 top-8 md:hidden block">
                 {
                    open ? <FiX /> : <FiMenu />
                 }
            </button>
            <div className={`background absolute md:static lg:z-auto z-20 w-full left-0 lg:px-0 px-9 transition-all duration-200 ease-in ${open ? "top-20" : "top-[-420px]"} flex lg:items-center lg:justify-between lg:flex-row flex-col`}>
                <ul className="lg:ml-6 md:flex md:items-center gap-7 md:space-y-0 space-y-4 ">
                    <li className="">
                        <Link to="/" className="text-gray-600 uppercase text-sm cursor-pointer">Learn</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-gray-600 uppercase text-sm font-semibold cursor-pointer">Blog</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-gray-600 uppercase text-sm cursor-pointer">Bookmarks</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-gray-600 uppercase text-sm cursor-pointer">Ui kit</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-gray-600 uppercase text-sm cursor-pointer">contact</Link>
                    </li>
                </ul>
                <div className="flex py-5 gap-5 text-gray-600">
                    <FiTwitter />
                    <FiInstagram />
                    <FiDribbble />
                    <FiSlack />
                </div>
            </div>

        </div>
    </div>
  );
}