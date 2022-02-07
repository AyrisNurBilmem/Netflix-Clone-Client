import Landing from "./pages/landing/Landing";
import { Route, Routes } from "react-router-dom";
import Signin from "./pages/signin/Signin";
import FirstStep from "./pages/registration/FirstStep";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signin/registration" element={<FirstStep />} />
      </Routes>
    </div>
  );
}

export default App;
