
import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import { useState } from "react";
import { validateEmail } from "../../utills/helper";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    if(!validateEmail(email)) {
      setError("Please enter a valid email")
      return;
    }
    if(!password) {
      setError("Please enter a password");
      return;
    }
    setError("");
  }
  return (
    <>
      <Navbar/>

      <form className="login" onSubmit={handleLogin}>
      <h3>Login</h3>

      <label htmlFor="email">Email: </label>
      <input
        id="email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label htmlFor="password">Password: </label>
      <input
        id="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      {error && <p className="error">{error}</p>}

      <button>Login</button>

      <p>Not registered yet?{" "}<Link to={"/signup"}>Create an Account</Link></p> 
    </form>
    </>
  )
}

export default Login