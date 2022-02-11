import Landing from "./pages/landing/Landing";
import { Route, Routes } from "react-router-dom";
import Signin from "./pages/signin/Signin";
import FirstStep from "./pages/registration/first/FirstStep";
import SecondStep from "./pages/registration/second/SecondStep";
import ThirdStep from "./pages/registration/third/ThirdStep";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup/registration" element={<FirstStep />} />
        <Route exact path="/signup/regform" element={<SecondStep />} />
        <Route exact path="/signup" element={<ThirdStep />} />
      </Routes>
    </div>
  );
}

export default App;
