import { Link } from "react-router-dom"
import "./topbar.css"
import { Context } from "../../Context/Context"
import { useContext } from "react"


export default function TopBar() {
    const { user, dispatch } = useContext(Context)
    const PF = "http://localhost:5000/images/"
    
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
  };

    return (
        <div className= "top">
            <div className="topLeft">
                <a href="https://www.facebook.com/"><i className="topIcon fab fa-facebook-square"></i></a>
                <a href="https://www.instagram.com/"><i className="topIcon fab fa-instagram"></i></a>
                <a href="https://twitter.com/?lang=en"><i className="topIcon fab fa-twitter"></i></a>
                <a href="https://in.pinterest.com/"><i className="topIcon fab fa-pinterest-square"></i></a>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
                    <li className="topListItem"><a className="link" href="https://forms.gle/7t99caiSswu93M47A">CONTACT</a></li>
                    <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
                    <li className="topListItem" onClick={handleLogout}> {user && "LOGOUT"} </li>
              </ul>
            </div>
            <div className="topRight">
                {user ? (
                <Link to="/settings">
                <img className="topImage" src={PF + user.profilePic} alt="Profile"/>
                </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem"><Link className="link" to="/login">LOGIN</Link></li>
                        <li className="topListItem"><Link className="link" to="/register">REGISTER</Link></li>
                    </ul>
                 ) } 
            </div>
        </div>
    )
}
