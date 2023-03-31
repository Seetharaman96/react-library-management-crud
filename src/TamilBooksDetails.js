import { IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useParams } from "react-router-dom";

function TamilBooksDetails() {
  return (<div>
    <div className="master-card">
      <div key={index} className="card">
        <img className="image" src={tamil.image} alt={tamil.book} />
        <div className="book-details">
          <p>
            <strong>Book :</strong>
            {tamil.book}
          </p>
          <p>
            <strong>Author :</strong>
            {tamil.author}
          </p>
        </div>
        <div className="material-btns">
          <IconButton variant="outlined" color="primary" onClick={() => navigate("/tamilbooks/details")}>
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
    </div>
  </div>);
}
