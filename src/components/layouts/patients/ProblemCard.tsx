import { Card } from "antd";
import { CSSProperties } from "react";
import { TProblem } from "../../types/commonTypes";

const gridStyle: CSSProperties = {
  width: "25%",
  textAlign: "center",
};

function ProblemCard({ problem }: { problem: TProblem }) {
  return (
    <Card.Grid style={gridStyle}>{problem?.problem.problemName}</Card.Grid>
  );
}

export default ProblemCard;
