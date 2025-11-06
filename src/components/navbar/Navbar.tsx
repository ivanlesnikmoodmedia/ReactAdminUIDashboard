import "./navbar.scss";
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo"></div>
            <img src="logo.svg" alt="" />
            <span>lamadmin</span>
            <div className="icons">
                <img src="/search.svg" alt="" className="icon" />
                <img src="/app.svg" alt="" className="icon" />
                <img src="/expand.svg" alt="" className="icon" />
            <div className="notification">
                <img src="/notification.svg" alt="" />
                <span>1</span> 
            <div/>
            <div className="user"> 
            </div>
                <img src="" alt="" className="icon" />
            </div>
        </div>
        </div>
    );
};

export default Navbar;