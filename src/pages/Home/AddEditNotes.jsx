import { useState } from "react";
import { MdClose } from "react-icons/md";
import PropTypes from "prop-types";

const AddEditNotes = ({ noteData, type, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  const [error, setError] = useState(null);

  //Add Note
  const addNewNote = async () => {};

    //Edit Note
    const editNote = async () => {};

  const handleAddNote = async (e) => {
    e.preventDefault();
    if (!date) {
      setError("Please select a date");
      return;
    }

    if (!title) {
      setError("Please provide a title");
      return;
    }
    if (!content) {
      setError("Please provide a content");
      return;
    }

    setError("");

    if(type === 'edit') {
        editNote()
    } else {
        addNewNote()
    }
  };

  return (
    <div>
      <button className="close-btn" onClick={onClose}>
        <MdClose />
      </button>
      <form className="add-entry">
        <h3>Create an Entry</h3>

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          onChange={({ target }) => setDate(target.value)}
          value={date}
          //   className={emptyFields.includes('date') ? 'error' : ''}
        />

        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          onChange={({ target }) => setTitle(target.value)}
          value={title}
          //   className={emptyFields.includes('title') ? 'error' : ''}
        />

        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          onChange={({ target }) => setContent(target.value)}
          value={content}
          //   className={emptyFields.includes('content') ? 'error' : ''}
        />
        {error && <div className="error">{error}</div>}
        <button onClick={handleAddNote}>Add Entry</button>
      </form>
    </div>
  );
};

AddEditNotes.propTypes = {
  onClose: PropTypes.func,
  type: PropTypes.string,
  noteData: PropTypes.object,
};

export default AddEditNotes;
