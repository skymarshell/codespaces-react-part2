import React, { useState, useRef } from "react";

export default function BMI() {
  const [BMI, setBMI] = useState(null); 

  const w_r = useRef(null);
  const h_r = useRef(null);

  const calBMI = () => {
    let w = w_r.current.value;
    let h = h_r.current.value / 100;
    const bmi_value = (w / Math.pow(h, 2)).toFixed(2);
    setBMI(parseFloat(bmi_value));
  };

  return (
    <>
      <h1>BMI calculator</h1>
      <div>
        <label htmlFor="w">Weight</label>
        <input type="number" ref={w_r} id="w" />
        <span> kg.</span>
      </div>
      <div>
        <label htmlFor="h">Height</label>
        <input type="number" ref={h_r} id="h" />
        <span> cm.</span>
      </div>
      <button onClick={calBMI}>Calculate!</button>
      <p>BMI value : {BMI}</p> 
      <BmiText BMI={BMI} />
    </>
  );
}

function BmiText({ BMI }) {
  if (BMI === null || isNaN(BMI)) {
    return; 
  } else if (BMI < 18.5) {
    return <h1>น้ำหนักน้อยกว่าปกติ</h1>;
  } else if (BMI >= 30) {
    return <h1>อ้วน</h1>; 
  } else if (BMI >= 25) {
    return <h1>เริ่มอ้วน</h1>;
  } else {
    return <h1>น้ำหนักปกติ น้ำหนักเหมาะสม</h1>;
  }
}
