import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home } from "./Home";
import { Library } from "./Library";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Tamil } from "./Tamil";
import { History } from "./History";
import { Biography } from "./Biography";
import { SciFi } from "./SciFi";
import { Geography } from "./Geography";
import { Economics } from "./Economics";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate("/library")}>
              Library
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/library/tamil" element={<Tamil />} />
        <Route path="/library/history" element={<History />} />
        <Route path="/library/biography" element={<Biography />} />
        <Route path="/library/sci-fi" element={<SciFi />} />
        <Route path="/library/geography" element={<Geography />} />
        <Route path="/library/economics" element={<Economics />} />
      </Routes>
    </div>
  );
}
export default App;