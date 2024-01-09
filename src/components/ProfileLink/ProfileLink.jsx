import { Link, useLocation } from "react-router-dom";
import iconProfile from "../../images/header__icon-man.svg";

// eslint-disable-next-line react/prop-types
export default function ProfileLink({ menuIsActive }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <Link to="/profile" className="profile-link profile-link_auth">
      Аккаунт
      <div
        className={`profile-link__container ${isHomePage && !menuIsActive ? "profile-link__container_color_blue" : ""}`}
      >
        <img
          src={iconProfile}
          alt="Белая иконка силуэта лица и шеи человека"
          className="profile-link__icon"
        />
      </div>
    </Link>
  );
}

