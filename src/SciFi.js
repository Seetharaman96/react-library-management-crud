import { Button, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

export function SciFi() {
  const scienceFictionBook = [
    {
      image:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91rNzjYLZgL.jpg",
      book: "En Iniya Iyanthira",
      author: "Sujatha",
    },
    {
      image:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71CaICr3OeL.jpg",
      book: "Aliens in Delhi",
      author: "Sami Ahmad Khan",
    },
    {
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRDV7X4aLjP7_nVvn89M3HYNypcsp9kejsvbVXVX5d1o1MtNZmO",
      book: "The Dune",
      author: "Frank Herbert",
    },
    {
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1575716376i/10225702._UY1360_SS1360_.jpg",
      book: "Meendum Jeano",
      author: "Sujatha",
    },
  ];

  const navigate = useNavigate();
  return (
    <div>
      <div className="title">
        <h1>Hello all welcome to the science fiction book section</h1>
      </div>
      <div className="master-card">
        {scienceFictionBook.map((sci, index) => (
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
