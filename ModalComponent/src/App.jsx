import { useState } from "react";
import { Modal } from "./Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <h1>App</h1>
      <button onClick={() => setIsModalOpen(true)}>Show dialog</button>
      {isModalOpen && (
        <Modal title="My Modal" closeModal={() => setIsModalOpen(false)}>
          Modal content
        </Modal>
      )}
    </>
  );
}

export default App;
