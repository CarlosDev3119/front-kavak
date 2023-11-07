import "./Navbar.css";
import avatar from '../../assets/avatar.svg'

interface NavbarProps {
    sidebarOpen: boolean;
    openSidebar: () => void;
}

export const Navbar = ({openSidebar, sidebarOpen}: NavbarProps) => {



    return (
        <nav className="navbar">
            <div 
                className="nav_icon"
                onClick={() => openSidebar()}
            >
                <i className="fa fa-bars"></i>
            </div>

            <div className="navbar__left">
                <a href="#">Subscribers</a>
                <a href="#">Video Management</a>
                <a href="#" className="active_link">Admin</a>
            </div>

            <div className="navbar__right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>
                <a href="#">
                    <i className="fa fa-clock-o"></i>
                </a>
                <a href="#">
                    <img width="30" src={avatar} alt="avatar" />
                </a>
            </div>
        </nav>
    )
}
