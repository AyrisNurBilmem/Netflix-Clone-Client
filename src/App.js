import Landing from "./pages/landing/Landing";
import { Route, Routes } from "react-router-dom";
import Signin from "./pages/signin/Signin";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
