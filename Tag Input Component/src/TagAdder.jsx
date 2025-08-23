import { useState } from "react";
import Tag from "./Tag";

export default function TagAdder() {
  const [tagList, setTagList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addTag(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      let tagName = e.target.value;
      if (!tagList.includes(tagName)) {
        setTagList((prevList) => [...prevList, tagName]);
      }
    }

    if (e.key === "Backspace" && inputValue.trim().length === 0) {
      e.preventDefault();
      let newList = tagList.slice(0, -1);
      setTagList(newList);
    }
  }

  function handleTabClose(name) {
    let newList = tagList.filter((tag) => tag !== name);
    setTagList(newList);
  }

  return (
    <>
      <label htmlFor="tabInput">Add tag </label>
      <input
        id="tabInput"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={addTag}
      />

      <div>
        {tagList.length > 0 && (
          <ul style={{ listStyle: "none" }}>
            {tagList.map((tag) => (
              <li key={tag}>
                <Tag name={tag} onClose={handleTabClose}></Tag>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
