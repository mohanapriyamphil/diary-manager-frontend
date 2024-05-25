import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import { useState } from "react";
import { validateEmail } from "../../utills/helper";


const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = (e) => {
    e.preventDefault();

    if(!name) {
      setError("Please enter your name");
      return;
    }

    if(!validateEmail(email)) {
      setError("Please enter a valid email");
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

    <form className="login" onSubmit={handleSignup}>
    <h3>Sign Up</h3>

    <label htmlFor="name">Name: </label>
    <input
      id="name"
      type="text"
      onChange={(e) => setName(e.target.value)}
      value={name}
    />

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

    <button>Create Account</button>

    <p>Already have an account?{" "}<Link to={"/login"}>Login</Link></p> 
  </form>
  </>
  )
}

export default Signup