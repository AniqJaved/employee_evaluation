import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  PlayCircleOutline,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/courses" className="link">
              <li className="sidebarListItem">
                <PlayCircleOutline className="sidebarIcon" />
                Courses
              </li>
            </Link>
            <Link to="/workloads" className="link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Workloads
              </li>
            </Link>
            <Link to="/researchs" className="link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Researchs
              </li>
            </Link>
            <Link to="/points" className="link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Points
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
