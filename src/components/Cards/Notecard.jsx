// import { format, formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";

const Notecard = ({ title, date, content, onEdit, onDelete }) => {
  return (
    <div className="post-details">
      <h4>{title}</h4>
      <p>{date}</p>
      {/* <p>
        <strong>Date: </strong>
        {format(new Date(date), "MMMM d, y")}
      </p> */}
      <h6>{content?.slice(0, 60)}</h6>
      <br />
      {/* <p>
        {formatDistanceToNow(new Date(title.createdAt), { addSuffix: true })}
      </p> */}
      <div className="edit-delete-btn">
        <span className="material-symbols-outlined" onClick={onDelete}>
          delete
        </span>
        <span className="material-symbols-outlined" onClick={onEdit}>
          edit
        </span>
      </div>
    </div>
  );
};

Notecard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  content: PropTypes.string,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Notecard;
