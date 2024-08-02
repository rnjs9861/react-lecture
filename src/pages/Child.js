import React, { memo } from "react";

const Child = () => {
  console.log("===> 자식 컴포넌트 입니다.");
  return (
    <div style={{ border: "5px solid #000" }}>
      <h3>자식 컴포넌트</h3>
    </div>
  );
};

export default memo(Child);
