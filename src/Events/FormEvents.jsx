import React,{useState} from "react";
function FormEvents() {
  const [userName, setUserName] = useState("");
  const getUserName = (event) => {
    setUserName(event.target.value);
  };
  return (
    <section className="formSection">
      <h2>{userName}</h2>
      <div className="inputDiv">
        <input type="text" placeholder="Enter your Name" onChange={getUserName} />
        <br />
        <button className="submitBtn">Submit</button>
      </div>
    </section>
  );
}

export default FormEvents;