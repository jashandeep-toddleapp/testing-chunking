import React from "react";
import { ScrollContainer } from "react-router-scroll";
import { dummyFunctionFromModule, dummyVariable } from "./page1Module"; // Import from the module

const Page1Component = () => {
  const scrollKey = "page1-scroll";

  // Call the dummy function
  const moduleData = dummyFunctionFromModule();

  return (
    <div>
      <h1>Page 1</h1>
      <p>Data from module: {moduleData}</p>{" "}
      {/* Display data from the function */}
      <p>Variable from module: {dummyVariable}</p> {/* Display the variable */}
      <ScrollContainer scrollKey={scrollKey}>
        <div
          style={{
            width: "500px",
            height: "500px",
            background: "ivory",
            padding: "20px",
            overflow: "scroll",
            whiteSpace: "nowrap",
          }}
        >
          {Array.from({ length: 50 }, (_, i) => (
            <p key={i}>
              Page 1 Content Line {i + 1}: This is a scrollable component. This
              is extra content for the mini scrollable for the content.
            </p>
          ))}
        </div>
      </ScrollContainer>
      {Array.from({ length: 30 }, (_, i) => (
        <p key={i + 100}>
          Additional content to make the page longer and require scrolling.
        </p>
      ))}
    </div>
  );
};

export default Page1Component;
