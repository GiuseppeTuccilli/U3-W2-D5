import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyNavbar from "./components/MyNavbar.jsx";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CentralSection from "./components/CentralSection.jsx";
import Welcome from "./components/Welcome.jsx";
import Details from "./components/Details.jsx";
import Details2 from "./components/Details.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useParams } from "react-router-dom";

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
            <Route path="/:city" element={<Details2 />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
