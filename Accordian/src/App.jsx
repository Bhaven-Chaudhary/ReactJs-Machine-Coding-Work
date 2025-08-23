import "./App.css";
import Accordion from "./Accordion";

// Build a simple accordion component.

// Each section has a title and content.
// Only one section should be open at a time.
// Clicking on a title toggles it open/closed.
// Data should come from a sections prop.

const sections = [
  { id: 1, title: "Test 1", content: "Test 1 content" },
  { id: 2, title: "Test 2", content: "Test 2 content" },
  { id: 3, title: "Test 2", content: "Test 2 content" },
];

function App() {
  return (
    <>
      <Accordion sections={sections}></Accordion>
    </>
  );
}

export default App;
