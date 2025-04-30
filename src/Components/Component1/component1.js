import React from "react";
import { dummyVariable } from "../../pages/Page1/page1Module";

const Component1 = () => {
  return (
    <div>
      <h2>Component 1</h2>
      <p>This is a placeholder for Component 1.</p>
      <p>{dummyVariable}</p>
    </div>
  );
};

export default Component1;
