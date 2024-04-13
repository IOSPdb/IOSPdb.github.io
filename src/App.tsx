import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Categories from "./pages/Categories/Categories";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element="Projects" />
        <Route path="categories" element={<Categories />} />
      </Route>
    </Routes>
  );
}

export default App;
