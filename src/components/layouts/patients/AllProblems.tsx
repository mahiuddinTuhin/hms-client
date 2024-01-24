import { useAllproblemsQuery } from "../../../redux/features/departments/departmentApi";

function AllProblems() {
  console.log("object");
  const result = useAllproblemsQuery(undefined);
  console.log(result);

  return <div>AllProblems</div>;
}

export default AllProblems;
