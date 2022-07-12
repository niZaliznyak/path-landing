import { useState } from 'react';
import { Button } from '../Button';
import { ReactComponent as BurgerIcon } from './icons/BurgerIcon.svg';
import Logo from './images/Logo.png';
import Menu from './Menu';

export function NavBar() {
    const [show, setShow] = useState(null);
    const toggleMenu = () => setShow(!show);

    return (
        <div className="flex justify-center items-center w-full h-14 md:h-24 bg-finished z-50 fixed text-base font-medium">
            <div className="flex items-center justify-between w-full max-w-6xl px-6">
            <img src={Logo} alt="logo" className="min-w-16 ml-6" />
                <div className="hidden md:flex w-1/3 min-w-fit justify-between truncate">
                    <ul className="flex justify-between items-center space-x-9 ml-6">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>FAQs</li>
                    </ul>
                </div>
                <div>
                    <BurgerIcon className="flex md:hidden cursor-pointer" onClick={toggleMenu} />
                    <ul className="hidden md:flex justify-between items-center space-x-9">
                        <li>Log In</li>
                        <li className="-ml-4"><Button>Get Started</Button></li>
                    </ul>
                </div>
            </div>
            <Menu visible={show} onOverlayClick={toggleMenu} />
        </div>
    );
}
