import { useNavigate } from "react-router-dom";

export function Library() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Hello all welcome to the library section</h1>
      <div className="library-btns">
        <button className="btn" onClick={()=>navigate("/library/tamil")}>Tamil</button>
        <button className="btn" onClick={()=>navigate("/library/history")}>History</button>
        <button className="btn" onClick={()=>navigate("/library/biography")}>Biography</button>
        <button className="btn" onClick={()=>navigate("/library/sci-fi")}>Sci-fi</button>
        <button className="btn" onClick={()=>navigate("/library/geography")}>Geography</button>
        <button className="btn" onClick={()=>navigate("/library/economics")}>Economics</button>
      </div>
    </div>
  );
}
