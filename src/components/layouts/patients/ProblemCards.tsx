import { Card } from "antd";
import { TProblems } from "../../types/commonTypes";
import ProblemCard from "./ProblemCard";

function ProblemCards({ problems }: { problems: TProblems }) {
  return (
    <Card title="All Problems">
      <div className="flex flex-row flex-wrap gap-2 items-center justify-center hover:cursor-pointer">
        {problems?.map((item, index) => (
          <ProblemCard key={index} problem={item} />
        ))}
      </div>
    </Card>
  );
}

export default ProblemCards;
