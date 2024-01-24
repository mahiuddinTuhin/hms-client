import { QueryStatus } from "@reduxjs/toolkit/query";
import { useAllproblemsQuery } from "../../../redux/features/departments/departmentApi";
import ProblemCards from "./ProblemCards";

function AllProblems() {
  // console.log("object");
  const { data, error, status } = useAllproblemsQuery(undefined);

  if (status === QueryStatus.pending) {
    return <h1>Loading ...............</h1>;
  }
  if (error) {
    return <h1>Error loading data</h1>;
  }

  if (!data) {
    return <h1>No data found</h1>;
  }

  return <ProblemCards problems={data.data} />;
}

export default AllProblems;
