import { useState } from "react";
import "./App.css";
import RestrictedPage from "./components/RestrictedPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const user = "Luciana Nunes";

  const loginToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="App">
      <RestrictedPage user={user} isLoggedIn={isLoggedIn} Login={loginToggle} />
    </div>
  );
}

export default App;
