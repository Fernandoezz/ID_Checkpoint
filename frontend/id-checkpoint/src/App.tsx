import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = () => {
  return <h1>Hello, World!</h1>;
};

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
