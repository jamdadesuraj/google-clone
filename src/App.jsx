import { useState } from "react";
import "./App.css";

import { Navbar, Routes, Footer } from "./components";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <>
      <div className={darkTheme ? "dark" : ""}>
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <Routes />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
