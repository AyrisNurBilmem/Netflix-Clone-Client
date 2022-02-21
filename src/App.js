import { useState, useMemo } from "react";
import Landing from "./pages/landing/Landing";
import { Route, Routes } from "react-router-dom";
import Signin from "./pages/signin/Signin";
import IntroductionStep from "./pages/registration/introduction/IntroductionStep";
import FirstStep from "./pages/registration/first/FirstStep";
import SecondStep from "./pages/registration/second/SecondStep";
import ThirdStep from "./pages/registration/third/ThirdStep";
import { UserContext } from "./context/UserContext";

function App() {
  const [email, setEmail] = useState("email");
  const value = useMemo(() => ({ email, setEmail }), [email]);
  return (
    <div>
      <UserContext.Provider value={value}>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route
            exact
            path="/signup/registration"
            element={<IntroductionStep />}
          />
          <Route exact path="/signup/regform" element={<FirstStep />} />
          <Route exact path="/signup" element={<SecondStep />} />
          <Route exact path="/paymentChoice" element={<ThirdStep />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
