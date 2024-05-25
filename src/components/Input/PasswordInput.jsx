import { useState } from "react"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const PasswordInput = ({ value, onChange, placeholder }) => {
    const [isShowPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!isShowPassword);
    }
  return (
    <div className="password-container">
        <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text" : "Enter your password"}
        placeholder={placeholder || "Enter your password"}
        />
        
    </div>
  )
}

export default PasswordInput