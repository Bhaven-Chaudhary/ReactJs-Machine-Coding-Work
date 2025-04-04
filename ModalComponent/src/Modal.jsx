export function Modal({ title = "Header", children, closeModal }) {
  return (
    <>
      <div className="backdrop" onClick={closeModal}></div>
      <div className="modalContainer">
        <div className="modalContent">
          <div className="modalTitle">
            <span>{title} </span>
            <span className="closeButton" onClick={closeModal}>
              x
            </span>
          </div>
          <div className="modalBody">{children}</div>
          <div className="modalFooter modalTitle">Test Footer</div>
        </div>
      </div>
    </>
  );
}
