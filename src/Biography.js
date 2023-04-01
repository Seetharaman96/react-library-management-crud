import { Button, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

export function Biography({ bio, setBio }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="title">
        <h1>Hello all welcome to the bio section</h1>
      </div>
      <div className="master-card">
        {bio.map((bio, index) => (
          <div key={index} className="card">
            <img className="image" src={bio.image} alt={bio.book} />
            <div className="book-details">
              <p>
                <strong>Book :</strong>
                {bio.book}
              </p>
              <p>
                <strong>Author :</strong>
                {bio.author}
              </p>
            </div>
            <div className="material-btns">
              <IconButton
                variant="outlined"
                color="primary"
                onClick={() => navigate(`/library/biography/bookdetails/${index}`)}
              >
                <InfoIcon></InfoIcon>
              </IconButton>
              <IconButton variant="outlined" color="success">
                <EditIcon></EditIcon>
              </IconButton>
              <IconButton variant="outlined" color="error">
                <DeleteIcon></DeleteIcon>
              </IconButton>
            </div>
          </div>
        ))}
      </div>
      <div className="add-btn">
        <Button variant="contained" color="primary">
          Add New Book
        </Button>
      </div>
    </div>
  );
}
