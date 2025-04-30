import React from "react";
import { ScrollContainer } from "react-router-scroll";
// import { dummyFunctionFromModule, dummyVariable } from "../Page1/page1Module"; // Import from the module

const Page2Component = () => {
  const scrollKey = "page2-scroll";

  return (
    <div>
      <h1>Page 2</h1>
      <ScrollContainer scrollKey={scrollKey}>
        <div
          style={{
            width: "1200px",
            height: "500px",
            background: "ivory",
            padding: "20px",
            overflow: "scroll",
            whiteSpace: "nowrap",
          }}
        >
          {Array.from({ length: 50 }, (_, i) => (
            <p key={i}>
              Page 2 Content Line {i + 1}: This is a scrollable component.
            </p>
          ))}
        </div>
      </ScrollContainer>
      {/* Your content for Page 2 */}
      {Array.from({ length: 100 }, (_, i) => (
        <p key={i}>Page 2 Content Line {i + 1}</p>
      ))}
    </div>
  );
};

export default Page2Component;
