import { Button, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

export function Biography() {
  const biographyBook = [
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1588286863i/634583.jpg",
      book: "Wings of Fire",
      author: "Arun Tiwari",
    },
    {
      image:
        "https://s3.ap-south-1.amazonaws.com/storage.commonfolks.in/docs/products/images_full/mahatma-gandhi-autobiography-the-story-of-my-experiments-with-truth_FrontImage_892.jpg",
      book: "Satya ke prayog",
      author: "Mahatma Gandhi",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41rpE7Ofy2L._SX319_BO1,204,203,200_.jpg",
      book: "A Life Well Lived",
      author: "Kitty Ferguson",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41n1edvVlLL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
      book: "Steve Jobs",
      author: "Walter Isaacson",
    },
  ];

  const navigate = useNavigate();
  return (
    <div>
      <div className="title">
        <h1>Hello all welcome to the bio section</h1>
      </div>
      <div className="master-card">
        {biographyBook.map((tamil, index) => (
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
