import { getInitials } from "../../utills/helper"
import PropTypes from 'prop-types'

const ProfileInfo = ({ handleLogout }) => {

  return (
    <div className="profile-container">
        <div className="profile-logo">{getInitials("Priya")}</div>

        <div className="profile-detail">
            <p className="profile-name">Priya</p>
            <button onClick={handleLogout} className="profile-btn">Logout</button>
        </div>
    </div>
  )
}

ProfileInfo.propTypes = {
    handleLogout: PropTypes.func,
};

export default ProfileInfo