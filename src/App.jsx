import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyNavbar from "./components/MyNavbar.jsx";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CentralSection from "./components/CentralSection.jsx";
import Welcome from "./components/Welcome.jsx";
import Details from "./components/Details.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />

        <Container className="shadow pb-3">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Welcome />
                  <CentralSection />
                </>
              }
            />
            <Route path="/:city/:country" element={<Details />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
