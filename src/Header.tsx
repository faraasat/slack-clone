import "./Header.css";
import { Avatar } from "@material-ui/core";
import { AccessTimeRounded, Search, HelpOutline } from "@material-ui/icons";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          //   alt={user?.displayName}
          //   src={user?.photoURL}
        />
        <AccessTimeRounded />
      </div>
      <div className="header__search">
        <Search />
        <input placeholder="Search Clever Programmer" />
      </div>
      <div className="header__right">
        <HelpOutline />
      </div>
    </div>
  );
};

export default Header;
