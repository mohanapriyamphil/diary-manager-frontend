// import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import ProfileInfo from "../Cards/ProfileInfo";

const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  }

  return (
    <header>
      <div className="container">
        <h1>Diary App</h1>

        <ProfileInfo handleLogout={handleLogout}/>
{/* 
        <nav>
        <div>
          <Link to="/login" style={{"margin": "10px"}}>Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </nav> */}
      </div>
      
    </header>
  );
};

export default Navbar;
