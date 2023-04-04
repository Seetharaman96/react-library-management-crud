import { Button, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

export function SciFi({ sciFi, setSciFi }) {
  const deleteBook = (id) => {
    const alterList = sciFi.filter((del) => del.id !== id);
    setSciFi(alterList);
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="title">
        <h1>Hello all welcome to the science fiction book section</h1>
      </div>
      <div className="master-card">
        {sciFi.map((sci, index) => (
          <div key={index} className="card">
            <img className="image" src={sci.image} alt={sci.book} />
            <div className="book-details">
              <p>
                <strong>Book :</strong>
                {sci.book}
              </p>
              <p>
                <strong>Author :</strong>
                {sci.author}
              </p>
            </div>
            <div className="material-btns">
              <IconButton
                variant="outlined"
                color="primary"
                onClick={() => navigate(`/library/sci-fi/bookdetails/${index}`)}
              >
                <InfoIcon></InfoIcon>
              </IconButton>
              <IconButton
                variant="outlined"
                color="success"
                onClick={() => navigate(`/library/sci-fi/editbook/${sci.id}`)}
              >
                <EditIcon></EditIcon>
              </IconButton>
              <IconButton
                variant="outlined"
                color="error"
                onClick={() => deleteBook(sci.id)}
              >
                <DeleteIcon></DeleteIcon>
              </IconButton>
            </div>
          </div>
        ))}
      </div>
      <div className="add-btn">
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/library/sci-fi/addbook")}
        >
          Add New Book
        </Button>
        <Button variant="contained" color="error" onClick={()=>navigate("/library")}>
          Back
        </Button>
      </div>
    </div>
  );
}
