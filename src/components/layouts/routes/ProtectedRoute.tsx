import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { userCurrentToken } from "../../../redux/store";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const token = useAppSelector(userCurrentToken);

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
}

export default ProtectedRoute;
