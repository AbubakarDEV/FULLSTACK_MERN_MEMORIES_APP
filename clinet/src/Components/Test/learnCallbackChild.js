import React, { memo } from "react";

function LearnCallbackChild() {
  console.log("Child Component");
  return <h1>hello</h1>;
}

export default memo(LearnCallbackChild);
