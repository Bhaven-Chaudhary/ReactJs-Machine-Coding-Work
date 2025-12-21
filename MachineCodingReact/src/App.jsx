import { useState } from "react";
import "./App.css";
import OtpInput from "./SixDigitOtp/OtpInput";
import StarWarPeople from "./StarWarsTable/StarWarPeople";
import AcForm from "./AC-Form-001/ACForm001";
import Tracker from "./UaTracker/Tracket";

function App() {
  return (
    <>
      {/* <OtpInput /> */}
      {/* <StarWarPeople /> */}
      {/* <AcForm /> */}
      <Tracker url={"https://example.com/inactive"} />
    </>
  );
}

export default App;
