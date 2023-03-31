import { Button, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

export function TamilStoryBooks() {
  const tamilStoryBook = [
    {
      image:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91s48sH6xqL._AC_UF1000,1000_QL80_.jpg",
      book: "Ponniyin Selvan",
      author: "Kalki Krishnamurthy",
    },
    {
      image:
        "https://www.tamiltypingonline.com/wp-content/uploads/2022/11/Velpari-Novel-PDF-Download.jpg",
      book: "VelPaari",
      author: "Su Venkatesan",
    },
    {
      image:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51vhF5HY3aL.jpg",
      book: "Sivagamiyin Sapatham",
      author: "Kalki Krishnamurthy",
    },
    {
      image:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91f9LWmbueL.jpg",
      book: "Paarthiban Kanavu",
      author: "Kalki Krishnamurthy",
    },
  ];

  const navigate = useNavigate();
  return (
    <div>
      <div className="title">
        <h1>Hello all welcome to the tamil story book section</h1>
      </div>
      <div className="master-card">
        {tamilStoryBook.map((tamil, index) => (
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
              <IconButton
                variant="outlined"
                color="primary"
                onClick={() => navigate("/tamilbooks/details")}
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
