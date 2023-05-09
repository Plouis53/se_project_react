import avatar from "../images/avatar.svg";
import "../blocks/SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <img src={avatar} className="sidebar__avatar" alt="avatar" />
      <div className="sidebar__name">random text</div>
    </div>
  );
};
export default SideBar;
