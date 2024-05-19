import { Routes, Route } from "react-router-dom";
import { Result } from "../components";

const AppRoutes = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/search" element={<Result />} />
        <Route path="/images" element={<Result />} />
        <Route path="/news" element={<Result />} />
        <Route path="/videos" element={<Result />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
