export default function Slide({ imageUrl, caption, isActive }) {
  return (
    <div className={`slide ${isActive ? "active" : ""}`}>
      <img src={imageUrl} alt={caption} />
      <span>{caption}</span>
    </div>
  );
}
