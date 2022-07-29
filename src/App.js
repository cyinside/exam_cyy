import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Info from "./components/Info";
import AnimateComponent from "./components/AnimateComponent";
import { setPlatform } from "./util/util";
import './App.scss';

function App() {
  const os = setPlatform()
  localStorage.setItem('os', os)

  useEffect(() => {
    document.title = '灵静至维'
  }, [])

  const location = useLocation()
  return (
    <div className="App">
      <Header />
      <AnimatePresence>
        <Routes location={ location } key={ location.key }>
          <Route path="/" element={
            <AnimateComponent>
              <Info/>
            </AnimateComponent>
          } />
          <Route path="/about" element={
            <AnimateComponent>
              <Info/>
            </AnimateComponent>
          } />
        </Routes>
      </AnimatePresence>
    </div>
    
  );
}

export default App;
