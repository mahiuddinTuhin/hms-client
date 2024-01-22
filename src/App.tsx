import MainLayout from "./components/layouts/NavMenu/MainLayout";
import ProtectedRoute from "./components/layouts/routes/ProtectedRoute";

export default function App() {
  return (
    <ProtectedRoute>
      <MainLayout />;
    </ProtectedRoute>
  );
}
