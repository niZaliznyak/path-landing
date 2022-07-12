import { useState } from 'react';
import { ReactComponent as BurgerIcon } from './icons/BurgerIcon.svg';
import Logo from './images/Logo.png';
import Menu from './Menu';

export function NavBar() {
    const [show, setShow] = useState(null);
    const toggleMenu = () => setShow(!show);

    return (
        <>
            <div className="flex items-center justify-center h-14 w-full bg-finished z-50 fixed">
                <div className="flex justify-between w-full max-w-6xl px-7">
                    <img src={Logo} alt="logo" />
                    <BurgerIcon className="cursor-pointer md:hidden" onClick={toggleMenu} />
                </div>
            </div>
            <Menu visible={show} onOverlayClick={toggleMenu} />
        </>
    );
}
