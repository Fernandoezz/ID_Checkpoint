import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "../pages/Home";
// import Dashboard from "../pages/Dashboard";
// import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} /> 404 page */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
