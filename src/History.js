import { Button, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

export function History() {
  const historyBook = [
    {
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQAAWw7Da5Bfl8_dv8vlG0PpdpE11MXw1GxuVJzQgoqbWUSbG2O",
      book: "India Since Independence",
      author: "Bipin Chandra",
    },
    {
      image:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/416Jy-5rdLL._SX323_BO1,204,203,200_.jpg",
      book: "India After Gandhi",
      author: "Ramachandra Guha",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2021/1/UV/OY/KC/114532903/capture-500x500.JPG",
      book: "The Discovery of India",
      author: "Jawaharlal Nehru",
    },
    {
      image:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81em2oYa7vL.jpg",
      book: "Why I Am An Atheist",
      author: "Bhagat Singh",
    },
  ];

  const navigate = useNavigate();
  return (
    <div>
      <div className="title">
        <h1>Hello all welcome to the history book section</h1>
      </div>
      <div className="master-card">
        {historyBook.map((hist, index) => (
          <div key={index} className="card">
            <img className="image" src={hist.image} alt={hist.book} />
            <div className="book-details">
              <p>
                <strong>Book :</strong>
                {hist.book}
              </p>
              <p>
                <strong>Author :</strong>
                {hist.author}
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
