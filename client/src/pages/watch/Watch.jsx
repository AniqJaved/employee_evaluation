import { ArrowBackOutlined } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
  const location = useLocation();  //Here we are getting data from the listitem.jsx and we are accessing it to get the link for the whole movie.
  const movie = location.state.movie;
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src={movie.video}
      />
    </div>
  );
}