import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants'


const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full font-montserrat leading-normal text-lg text-slate-600 transition duration-75">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
                <img src={headerLogo} alt="Logo" width={130} height={29}/>
            </a>
            <ul className="flex-1 flex justify-center items-center gap-10 max-lg:hidden">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a 
                            href={item.href}
                            className=" hover:text-slate-900">
                                {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <dir className="max-lg:block hidden">
                <img src={hamburger} alt="Hamburger" width={25} height={25}/>
            </dir>
            <div className="flex-initial flex justify-center items-center gap-5 max-lg:hidden">
                <a href="#" className="hover:text-slate-900">Signin / Explore Now</a>
            </div>
        </nav>
    </header>
  )
}

export default Nav