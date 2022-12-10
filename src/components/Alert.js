import React from "react";

export default function Alert() {
  const testClick = (name) => {
    alert("hello" + name);
  };

  return (
    <div className="App">
      <button onClick={() => testClick("john")}>CLick Me!</button>
    </div>
  );
}
