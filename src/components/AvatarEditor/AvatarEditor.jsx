import "./AvatarEditor.css";
import avatarPlaceholderImg from "../../images/cards_page/avatar.png";

const AvatarEditor = () => (
  <div id="avatar-editor">
    <span>
      <img src={avatarPlaceholderImg} alt="avatar" className="img" />
    </span>
  </div>
);

export default AvatarEditor;
