import Notecard from "../../components/Cards/Notecard";
// import Navbar from "../../components/Navbar/Navbar";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import { useState } from "react";
import Modal from "react-modal";

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  return (
    <>
      <div>
        {/* <Navbar /> */}
        <div className="container mx-auto home-container">
          <div className="home">
            <Notecard
              title="Meeting on 10th June"
              date="25th May 2024"
              content="Meeting on 10th June is a content in the note"
              onEdit={() => {}}
              onDelete={() => {}}
            />
          </div>
        </div>
      </div>
      <div>
        <button
          className="add-btn"
          onClick={() => {
            setOpenAddEditModal({ isShown: true, type: "add", data: null });
          }}
        >
          <MdAdd style={{ fontSize: "32px", color: "white" }} />
        </button>
      </div>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=""
      >
        <AddEditNotes 
          type={openAddEditModal.type}
          noteData={openAddEditModal.data}
          onClose={() => {
            setOpenAddEditModal({ isShown: false, type: "add", data: null })
          }}/>
      </Modal>
    </>
  );
};

export default Home;
