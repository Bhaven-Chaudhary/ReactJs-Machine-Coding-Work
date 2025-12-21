import { useState } from "react";
import "./App.css";
import OtpInput from "./SixDigitOtp/OtpInput";
import StarWarPeople from "./StarWarsTable/StarWarPeople";
import AcForm from "./AC-Form-001/ACForm001";
import Tracker from "./UaTracker/Tracket";
import PkSelect from "./PK-Select-001/PkSelect";

function App() {
  return (
    <>
      {/* <OtpInput /> */}
      {/* <StarWarPeople /> */}
      {/* <AcForm /> */}
      {/* <Tracker url={"https://example.com/inactive"} /> */}
      <PkSelect />
    </>
  );
}

export default App;
