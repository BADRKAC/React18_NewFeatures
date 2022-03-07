import React, { useId } from "react";

function App() {
  const id = useId();
  return (
    <>
      <div className="field">
        <label htmlFor={`${id}-name`} >Name</label>
        <input type="text" name="name" id={`${id}-name`} />
      </div>
      <div className="field">
        <label htmlFor={`${id}-address`} >Address</label>
        <input type="text" aria-labelledBy={`${id}-name ${id}-address`} />
      </div>
      <div className="field">
        <label htmlFor={`${id}-passport`} >Do you have passport?</label>
        <input type="checkbox" name="passport" id={`${id}-passport`} />
      </div>
      </>
  );
}
