import { Button, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

export function Economics() {
  const economicsBook = [
    {
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR9WOtJ3OyZX7dbPpPYciJktUhYfqnBWsOh30-YgMwz81M0703Z",
      book: "The Wealth of Nations",
      author: "Adam Smith",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQubKvdknFyNXw8UXKMLhfyMfKBngC8B_S8dVj8AC48NPOu9sNF",
      book: "Freakonomics",
      author: "Steven Levitt",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9L2MUgzUoNXyqxHcEOHmkBSMTxaBLR7A0Ru1khp1E_SSCwKGn",
      book: "The Intelligent Investor",
      author: "Benjamin Graham",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNx738Tmx-_ousdcKxe9SXmpBx9ukhb4G-dnXQGpopBZXXtXpU",
      book: "Poor Economics",
      author: "Esther Duflo",
    },
  ];

  const navigate = useNavigate();
  return (
    <div>
      <div className="title">
        <h1>Hello all welcome to the economics book section</h1>
      </div>
      <div className="master-card">
        {economicsBook.map((eco, index) => (
          <div key={index} className="card">
            <img className="image" src={eco.image} alt={eco.book} />
            <div className="book-details">
              <p>
                <strong>Book :</strong>
                {eco.book}
              </p>
              <p>
                <strong>Author :</strong>
                {eco.author}
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
