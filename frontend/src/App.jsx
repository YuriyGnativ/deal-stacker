import React from "react";

import useNotifier from "./hooks/useNotifier";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";

function App() {
  useNotifier();
  return (
    <div className="app-container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
