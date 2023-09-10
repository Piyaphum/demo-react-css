import facebook from "../assets/icons/facebook.png";
import instragram from "../assets/icons/instagram.png";
import user from "../assets/icons/user.png";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <img src={user} alt="User" width={50} className="cursor-pointer"/>
            <ul className="hidden md:flex ">
                <li className="px-2"><a href="https://www.instagram.com/piyaphum_1492/" target=" blank"><img src={instragram} alt="Instragram" width={40}/></a>
                </li >
                
                <li className="px-2"><a href="https://www.facebook.com/piyaphum1492?locale=th_TH"><img src={facebook} alt="Facebook" width={40} /></a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;