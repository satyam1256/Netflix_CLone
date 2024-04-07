import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";
import NavbarItem from "./NavbarItem";
import { BsBell , BsChevronDown , BsSearch } from "react-icons/bs";




const TOP_OFFSET = 66;


const Navbar = () => {
    const router = useRouter();

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showBackground, setShowBackground] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
    }, []);

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current) => !current);
    }, []);

    useEffect( () => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

    });

    return (
        <nav className="w-full fixed z-40">
            <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}`}>
                <img src="/images/logo.png" className="h-2 s:h-6" alt="Logo" style={{maxWidth: "14%", height: "50%"}}  />
                <div className="flex-row ml-8 gap-7 hidden s:flex" style={{ width: "-webkit-fill-available" , display: "flex" , alignItems: "center" , paddingLeft:"2%" , paddingRight:"2%"}}>
                    <NavbarItem label="Home" active  />
                    <NavbarItem label="Series" />
                    <NavbarItem label="Films" />
                    <NavbarItem label="New & Popular" />
                    <NavbarItem label="My List" />
                    <NavbarItem label="Browse by Languages" />
                </div>
                <div onClick={ toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                    <p className="text-white text-sm">Browse</p>
                    <BsChevronDown className={`w-4 text-white fill-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
                    <MobileMenu visible={showMobileMenu} />
                </div>
                <div className="flex flex-row ml-auto gap-7 items-center">
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsSearch className="w-6" />
                    </div>
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsBell className="w-6" />
                    </div>
                    <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
                        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                            <img src="/images/default-blue.png" alt=""  style={{maxWidth: "25%", height: "50%"}}/>
                        </div>
                        <BsChevronDown className={`w-4 text-white fill-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
                        <AccountMenu visible={showAccountMenu} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar



