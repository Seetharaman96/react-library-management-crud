import { Button, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

export function Tamil() {
  const tamilBook = [
    {
      image:
        "https://kbimages1-a.akamaihd.net/af51647e-1896-4dcf-b130-6329aab5f35a/1200/1200/False/thirukkural.jpg",
      book: "Thirukkural",
      author: "Thiruvalluvar",
    },
    {
      image:
        "https://s3.ap-south-1.amazonaws.com/storage.commonfolks.in/docs/products/images_full/silappathikaaram_FrontImage_785.jpg",
      book: "Cilappatikaram",
      author: "Ilango Adigal",
    },
    {
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1595720133l/40339844.jpg",
      book: "Cīvaka Cintāmaṇi",
      author: "Tirutakkatevar",
    },
    {
      image:
        "https://routemybook.com/uploads/productImage/product1535562684.jpg",
      book: "Manimekalai",
      author: "Chithalai Chathanar",
    },
  ];

  const navigate = useNavigate();
  return (
    <div>
      <div className="title">
        <h1>Hello all welcome to the tamil section</h1>
      </div>
      <div className="master-card">
        {tamilBook.map((tamil, index) => (
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
