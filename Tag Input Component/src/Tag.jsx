export default function Tag({ name, onClose }) {
  return (
    <>
      <span>{name} </span>
      <span
        style={{ color: "red" }}
        onClick={() => {
          onClose(name);
        }}
      >
        x
      </span>
    </>
  );
}
