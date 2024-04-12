import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1>Welcome to the home page!</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
