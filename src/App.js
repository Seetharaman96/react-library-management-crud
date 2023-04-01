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
import { Economics } from "./Economics";
import { TamilStoryBooks } from "./TamilStoryBooks";
import { useState } from "react";
import {
  biographyBook,
  economicsBook,
  historyBook,
  scienceFictionBook,
  tamilBook,
  tamilStoryBook,
} from "./data";
import { TamilBooksDetails } from "./TamilBooksDetails";
import { HistoryBookDetails } from "./HistoryBookDetails";
import { BiographyBookDetails } from "./BiographyBookDetails";
import { ScienceFictionBookDetails } from "./ScienceFictionBookDetails";
import { TamilStoryBookDetails } from "./TamilStoryBookDetails";
import { EconomicsBookDetails } from "./EconomicsBookDetails";
import { AddTamilBook } from "./AddTamilBook";
import { Login } from "./fromik";

function App() {
  const [tamil, setTamil] = useState(tamilBook);
  const [history, setHistory] = useState(historyBook);
  const [bio, setBio] = useState(biographyBook);
  const [sciFi, setSciFi] = useState(scienceFictionBook);
  const [tamilStory, setTamilStory] = useState(tamilStoryBook);
  const [economics, setEconomics] = useState(economicsBook);
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
        <Route
          path="/library/tamil"
          element={<Tamil tamil={tamil} setTamil={setTamil} />}
        />
        <Route
          path="/library/tamil/bookdetails/:id"
          element={<TamilBooksDetails tamil={tamil} setTamil={setTamil} />}
        />
        <Route path="/library/tamil/addbook" element={<AddTamilBook tamil={tamil} setTamil={setTamil} />} />
        <Route
          path="/library/history"
          element={<History history={history} setHistory={setHistory} />}
        />
        <Route
          path="/library/history/bookdetails/:id"
          element={
            <HistoryBookDetails history={history} setHistory={setHistory} />
          }
        />
        <Route
          path="/library/biography"
          element={<Biography bio={bio} setBio={setBio} />}
        />
        <Route
          path="/library/biography/bookdetails/:id"
          element={<BiographyBookDetails bio={bio} setBio={setBio} />}
        />
        <Route
          path="/library/sci-fi"
          element={<SciFi sciFi={sciFi} setSciFi={setSciFi} />}
        />
        <Route
          path="/library/sci-fi/bookdetails/:id"
          element={
            <ScienceFictionBookDetails sciFi={sciFi} setSciFi={setSciFi} />
          }
        />
        <Route
          path="/library/tamilstorybooks"
          element={
            <TamilStoryBooks
              tamilStory={tamilStory}
              setTamilStory={setTamilStory}
            />
          }
        />
        <Route
          path="/library/tamilstorybooks/details/:id"
          element={
            <TamilStoryBookDetails
              tamilStory={tamilStory}
              setTamilStory={setTamilStory}
            />
          }
        />
        <Route
          path="/library/economics"
          element={
            <Economics economics={economics} setEconomics={setEconomics} />
          }
        />
        <Route
          path="/library/economics/details/:id"
          element={
            <EconomicsBookDetails
              economics={economics}
              setEconomics={setEconomics}
            />
          }
        />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}
export default App;
