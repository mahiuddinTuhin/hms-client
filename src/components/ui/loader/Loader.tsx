import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

function Loader() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Spin
        indicator={
          <LoadingOutlined onChange={() => {}} style={{ fontSize: 64 }} spin />
        }
      />
    </div>
  );
}

export default Loader;
