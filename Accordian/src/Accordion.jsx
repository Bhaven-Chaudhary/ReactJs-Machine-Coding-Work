import { useState } from "react";

export default function Accordion({ sections }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  function handleTitleClick(id) {
    if (activeIndex === id) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(id);
    }
  }

  return (
    <ul>
      {sections.map(({ id, title, content }) => {
        return (
          <li key={id}>
            <div className="heading" onClick={() => handleTitleClick(id)}>
              {title}
            </div>
            <div
              className={`content ${activeIndex === id ? "" : "displayNone"}`}
            >
              {content}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
