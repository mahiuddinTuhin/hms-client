import { Select } from "antd";
import React from "react";

const Test: React.FC = () => {
  return (
    <>
      <br />
      <br />
      <Select
        defaultValue="HangZhou"
        style={{ width: 120 }}
        options={[
          {
            value: "HangZhou",
            label: "HangZhou #310000",
          },
          {
            value: "NingBo",
            label: "NingBo #315000",
          },
          {
            value: "WenZhou",
            label: "WenZhou #325000",
          },
        ]}
      />
    </>
  );
};

export default Test;
