import React from "react";
import { ScrollContainer } from "react-router-scroll";

const Page3Component = () => {
  const scrollKey = "page3-scroll";

  return (
    <div>
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
              Page 3 Content Line {i + 1}: This is a scrollable component.
            </p>
          ))}
        </div>
      </ScrollContainer>
      <h1>Page 3</h1>
      {/* Your content for Page 3 */}
      {Array.from({ length: 100 }, (_, i) => (
        <p key={i}>Page 3 Content Line {i + 1}</p>
      ))}
    </div>
  );
};

export default Page3Component;
