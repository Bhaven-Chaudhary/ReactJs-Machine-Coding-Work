import { useEffect, useRef, useState } from "react";
import styles from "./OtpInput.module.css";

export default function ({}) {
  const otpLength = 6;
  const [otp, setOtp] = useState(Array(otpLength).fill(""));

  const inputRef = useRef([]);

  function handelInputChange(index, event) {
    let value = event.target.value.replace(/\D/g, "");

    if (!value) return;

    setOtp((prev) => {
      let tempValue = [...otp];
      tempValue[index] = value;
      return tempValue;
    });

    //Move to next box automatically
    if (index < otpLength - 1 && value) {
      inputRef.current[index + 1].focus(); //ref of next input box
    }
  }

  function handleKeyPress(event, index) {
    if (event.key === "Backspace") {
      setOtp((prevOtp) => {
        let temp = [...prevOtp];
        temp[index] = "";
        return temp;
      });
      if (index > 0) {
        inputRef.current[index - 1].focus();
      }
    }
  }

  useEffect(() => {
    //to check if all 6 inputs have value
    let isCompleted = otp.every((val) => val !== "" && val !== null);

    if (isCompleted) {
      console.log("Otp is", otp.join(""));
    }
  }, [otp]);

  return (
    <div className="OtpInputContainer">
      <h1>Enter your OTP</h1>
      <div>
        {otp.map((value, index) => {
          return (
            <input
              ref={(el) => (inputRef.current[index] = el)}
              value={otp[index]}
              key={index}
              className={styles.input}
              maxLength={1}
              onInput={(event) => handelInputChange(index, event)}
              onKeyDown={(e) => handleKeyPress(e, index)}
            />
          );
        })}
      </div>
    </div>
  );
}
